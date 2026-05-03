import { useState, useCallback } from 'react';
import { GeneratedPrompt, PromptTemplate } from '../types';
import { promptCategories } from '../utils/promptTemplates';
import { useAuth } from '../contexts/AuthContext';
import { savePromptToFirestore, getUserPrompts, deletePromptFromFirestore, updatePromptInFirestore } from '../services/firestore';

export const usePromptGenerator = () => {
  const { currentUser } = useAuth();
  const [prompts, setPrompts] = useState<GeneratedPrompt[]>([]);
  const [favorites, setFavorites] = useState<GeneratedPrompt[]>([]);
  const [currentTemplate, setCurrentTemplate] = useState<PromptTemplate | null>(null);
  const [variables, setVariables] = useState<Record<string, string>>({});

  // Load prompts from Firestore when user is authenticated
  const loadUserPrompts = useCallback(async () => {
    if (currentUser) {
      try {
        const userPrompts = await getUserPrompts(currentUser.uid);
        setPrompts(userPrompts);
        setFavorites(userPrompts.filter(p => p.favorite));
      } catch (error) {
        console.error('Error loading user prompts:', error);
      }
    }
  }, [currentUser]);

  const generatePrompt = useCallback((template: PromptTemplate, variableValues: Record<string, string>) => {
    let content = template.template;
    
    // Replace variables in template
    Object.entries(variableValues).forEach(([key, value]) => {
      content = content.replace(new RegExp(`{${key}}`, 'g'), value);
    });

    return content;
  }, []);

  const generatePromptWithLength = useCallback((
    template: PromptTemplate, 
    variableValues: Record<string, string>, 
    length: 'short' | 'medium' | 'long' = 'medium'
  ) => {
    let content = template.template;
    
    // Replace variables in template
    Object.entries(variableValues).forEach(([key, value]) => {
      content = content.replace(new RegExp(`{${key}}`, 'g'), value);
    });

    // Add length-specific instructions
    const lengthInstructions = {
      short: 'Keep the response concise and to the point.',
      medium: 'Provide a well-balanced response with appropriate detail.',
      long: 'Provide a comprehensive and detailed response with examples and thorough explanations.'
    };

    content += ` ${lengthInstructions[length]}`;

    const newPrompt: GeneratedPrompt = {
      id: Date.now().toString(),
      content,
      category: template.category,
      variables: variableValues,
      length,
      timestamp: new Date(),
      favorite: false
    };

    setPrompts(prev => [newPrompt, ...prev]);
    
    // Save to Firestore if user is authenticated
    if (currentUser) {
      savePromptToFirestore(newPrompt, currentUser.uid).catch(error => {
        console.error('Error saving prompt to Firestore:', error);
      });
    }
    
    return newPrompt;
  }, [currentUser]);

  const toggleFavorite = useCallback((promptId: string) => {
    setPrompts(prev => prev.map(p => 
      p.id === promptId ? { ...p, favorite: !p.favorite } : p
    ));
    
    const prompt = prompts.find(p => p.id === promptId);
    if (prompt) {
      const updatedPrompt = { ...prompt, favorite: !prompt.favorite };
      
      // Update in Firestore if user is authenticated
      if (currentUser) {
        updatePromptInFirestore(promptId, { favorite: updatedPrompt.favorite }).catch(error => {
          console.error('Error updating prompt in Firestore:', error);
        });
      }
      
      if (prompt.favorite) {
        setFavorites(prev => prev.filter(f => f.id !== promptId));
      } else {
        setFavorites(prev => [...prev, updatedPrompt]);
      }
    }
  }, [prompts, currentUser]);

  const deletePrompt = useCallback((promptId: string) => {
    setPrompts(prev => prev.filter(p => p.id !== promptId));
    setFavorites(prev => prev.filter(f => f.id !== promptId));
    
    // Delete from Firestore if user is authenticated
    if (currentUser) {
      deletePromptFromFirestore(promptId).catch(error => {
        console.error('Error deleting prompt from Firestore:', error);
      });
    }
  }, [currentUser]);

  const clearHistory = useCallback(() => {
    setPrompts([]);
    setFavorites([]);
  }, []);

  const getPromptsByCategory = useCallback((category: string) => {
    return prompts.filter(p => p.category === category);
  }, [prompts]);

  const searchPrompts = useCallback((searchTerm: string) => {
    if (!searchTerm) return prompts;
    
    return prompts.filter(p => 
      p.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [prompts]);

  const getCategoryTemplates = useCallback((categoryId: string) => {
    const category = promptCategories.find(cat => cat.id === categoryId);
    return category?.templates || [];
  }, []);

  return {
    prompts,
    favorites,
    currentTemplate,
    variables,
    loadUserPrompts,
    setCurrentTemplate,
    setVariables,
    generatePrompt: generatePromptWithLength,
    toggleFavorite,
    deletePrompt,
    clearHistory,
    getPromptsByCategory,
    searchPrompts,
    getCategoryTemplates
  };
};