import React, { useState } from 'react';
import { Wand2, Copy, Shuffle, Settings, Check, Sparkles, Loader } from 'lucide-react';
import { promptCategories, getSuggestions } from '../utils/promptTemplates';
import { copyToClipboard } from '../utils/exportUtils';
import { usePromptGenerator } from '../hooks/usePromptGenerator';
import { enhancePrompt, generatePromptSuggestions } from '../services/cohere';

export const PromptGenerator: React.FC = () => {
  const {
    currentTemplate,
    variables,
    setCurrentTemplate,
    setVariables,
    generatePrompt
  } = usePromptGenerator();
  
  const [selectedCategory, setSelectedCategory] = useState<string>('writing');
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [promptLength, setPromptLength] = useState<'short' | 'medium' | 'long'>('medium');
  const [copied, setCopied] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [enhancing, setEnhancing] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [apiError, setApiError] = useState<string>('');

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const category = promptCategories.find(cat => cat.id === categoryId);
    if (category && category.templates.length > 0) {
      const template = category.templates[0];
      setCurrentTemplate(template);
      
      // Initialize variables with empty values
      const initialVars: Record<string, string> = {};
      template.variables.forEach(variable => {
        initialVars[variable] = '';
      });
      setVariables(initialVars);
    }
    
    // Load AI suggestions for the category
    loadSuggestions(categoryId);
  };

  const loadSuggestions = async (categoryId: string) => {
    setLoadingSuggestions(true);
    setApiError('');
    try {
      const category = promptCategories.find(cat => cat.id === categoryId);
      if (category) {
        const aiSuggestions = await generatePromptSuggestions(category.name, category.description);
        setSuggestions(aiSuggestions);
      }
    } catch (error) {
      console.error('Error loading suggestions:', error);
      setSuggestions([]);
      setApiError('Could not load AI suggestions. Check your Cohere API key and restart the Vite server after updating .env.');
    } finally {
      setLoadingSuggestions(false);
    }
  };

  const handleVariableChange = (variable: string, value: string) => {
    setVariables(prev => ({ ...prev, [variable]: value }));
  };

  const handleGeneratePrompt = () => {
    if (!currentTemplate) return;
    
    // Check if all required variables are filled
    const missingVariables = currentTemplate.variables.filter(variable => 
      !variables[variable] || variables[variable].trim() === ''
    );
    
    if (missingVariables.length > 0) {
      alert(`Please fill in all variables: ${missingVariables.join(', ')}`);
      return;
    }
    
    const prompt = generatePrompt(currentTemplate, variables, promptLength);
    setGeneratedPrompt(prompt.content);
  };

  const handleEnhancePrompt = async () => {
    if (!generatedPrompt || !currentTemplate) return;
    
    setEnhancing(true);
    setApiError('');
    try {
      const enhanced = await enhancePrompt({
        originalPrompt: generatedPrompt,
        category: currentTemplate.category,
        targetAudience: variables.audience || 'general',
        tone: variables.tone || 'professional',
        length: promptLength
      });
      setGeneratedPrompt(enhanced);
    } catch (error) {
      console.error('Error enhancing prompt:', error);
      setApiError('Prompt enhancement failed. Verify your Cohere key, model access, and restart the dev server.');
    } finally {
      setEnhancing(false);
    }
  };

  const handleCopy = async () => {
    if (generatedPrompt) {
      const success = await copyToClipboard(generatedPrompt);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const handleRandomTemplate = () => {
    const category = promptCategories.find(cat => cat.id === selectedCategory);
    if (category && category.templates.length > 0) {
      const randomTemplate = category.templates[Math.floor(Math.random() * category.templates.length)];
      setCurrentTemplate(randomTemplate);
      
      // Auto-fill with random suggestions
      const autoVars: Record<string, string> = {};
      randomTemplate.variables.forEach(variable => {
        const suggestions = getSuggestions(variable);
        if (suggestions.length > 0) {
          autoVars[variable] = suggestions[Math.floor(Math.random() * suggestions.length)];
        }
      });
      setVariables(autoVars);
    }
  };

  const selectedCategoryData = promptCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold forest-text mb-2">
          AI Prompt Generator
        </h1>
        <p className="text-secondary">
          Create powerful AI prompts for any use case
        </p>
      </div>

      {/* Category Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {promptCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 group card-hover ${
              selectedCategory === category.id
                ? 'border-green-primary bg-green-light/30'
                : 'border-green-light hover:border-green-primary/50'
            }`}
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <h3 className="font-semibold text-sm forest-text">
              {category.name}
            </h3>
            <p className="text-xs text-secondary mt-1">
              {category.description}
            </p>
          </button>
        ))}
      </div>

      {/* Template Selection */}
      {selectedCategoryData && (
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold forest-text">
              {selectedCategoryData.name} Templates
            </h3>
            <div className="flex gap-2">
              <button
                onClick={handleRandomTemplate}
                className="p-2 rounded-lg bg-green-light text-green-primary hover:bg-green-light/70 transition-colors"
                title="Random template"
              >
                <Shuffle className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="p-2 rounded-lg bg-green-light/50 text-forest-text hover:bg-green-light transition-colors"
                title="Advanced options"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-3 mb-4">
            {selectedCategoryData.templates.map((template) => (
              <div
                key={template.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all card-hover ${
                  currentTemplate?.id === template.id
                    ? 'border-green-primary bg-green-light/30'
                    : 'border-green-light hover:border-green-primary/50'
                }`}
                onClick={() => {
                  setCurrentTemplate(template);
                  const initialVars: Record<string, string> = {};
                  template.variables.forEach(variable => {
                    initialVars[variable] = variables[variable] || '';
                  });
                  setVariables(initialVars);
                }}
              >
                <h4 className="font-medium forest-text mb-1">
                  {template.description}
                </h4>
                <p className="text-sm text-secondary line-clamp-2">
                  {template.template}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-green-light/50 text-forest-text rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Suggestions */}
      {apiError && (
        <div className="card p-4 border border-red-300 bg-red-50 text-red-700 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300">
          {apiError}
        </div>
      )}

      {selectedCategoryData && suggestions.length > 0 && (
        <div className="card p-6 bg-gradient-card dark:bg-slate-800/60 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-green-primary dark:text-green-medium" />
            <h3 className="text-lg font-semibold forest-text dark:text-slate-100">
              AI-Generated Ideas
            </h3>
            {loadingSuggestions && <Loader className="w-4 h-4 animate-spin text-green-primary" />}
          </div>
          <div className="grid gap-3">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-3 bg-white/80 dark:bg-slate-700/70 rounded-lg cursor-pointer hover:bg-white dark:hover:bg-slate-600/70 transition-colors border border-transparent dark:border-slate-600"
                onClick={() => setGeneratedPrompt(suggestion)}
              >
                <p className="text-sm forest-text dark:text-slate-100">{suggestion}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Variable Inputs */}
      {currentTemplate && (
  <div className="card p-6 dark:border-slate-700">
          <h3 className="text-lg font-semibold forest-text mb-4">
            Customize Your Prompt
          </h3>
          
          {/* Prompt Length Selection */}
          <div className="mb-6 p-4 bg-green-light/30 dark:bg-slate-700/40 rounded-lg">
            <label className="block text-sm font-medium forest-text mb-3">
              Prompt Length
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'short', label: 'Short', description: 'Concise and direct' },
                { value: 'medium', label: 'Medium', description: 'Balanced detail' },
                { value: 'long', label: 'Long', description: 'Comprehensive and detailed' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setPromptLength(option.value as 'short' | 'medium' | 'long')}
                  className={`p-3 rounded-lg border-2 transition-all text-center ${
                    promptLength === option.value
                      ? 'border-green-primary bg-green-light/30 dark:bg-slate-600/60 dark:border-green-medium'
                      : 'border-green-light dark:border-slate-600 hover:border-green-primary/50 dark:hover:border-green-medium'
                  }`}
                >
                  <div className="font-medium text-sm forest-text dark:text-slate-100">
                    {option.label}
                  </div>
                  <div className="text-xs text-secondary dark:text-slate-300 mt-1">
                    {option.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {currentTemplate.variables.map((variable) => {
              const suggestions = getSuggestions(variable);
              return (
                <div key={variable} className="space-y-2">
                  <label className="block text-sm font-medium forest-text capitalize">
                    {variable.replace('_', ' ')} 
                    <span className="text-xs text-muted ml-1">
                      (e.g., {getSuggestions(variable)[0] || 'example'})
                    </span>
                  </label>
                  <input
                    type="text"
                    value={variables[variable] || ''}
                    onChange={(e) => handleVariableChange(variable, e.target.value)}
                    placeholder={getSuggestions(variable)[0] || `Enter ${variable.replace('_', ' ')}`}
                    className="input-clean w-full"
                  />
                  {showAdvanced && suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {suggestions.slice(0, 4).map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => handleVariableChange(variable, suggestion)}
                          className="px-2 py-1 text-xs bg-green-light text-green-primary dark:bg-slate-700 dark:text-green-medium rounded-full hover:bg-green-light/70 dark:hover:bg-slate-600 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={handleGeneratePrompt}
            disabled={!currentTemplate || !Object.values(variables).every(v => v && v.trim())}
            className="w-full mt-6 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Wand2 className="w-5 h-5" />
            Generate Prompt
          </button>
        </div>
      )}

      {/* Generated Prompt */}
      {generatedPrompt && (
        <div className="card p-6 bg-gradient-card dark:bg-slate-800/60 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold forest-text">
              Generated Prompt
            </h3>
            <div className="flex gap-2">
              <button
                onClick={handleEnhancePrompt}
                disabled={enhancing}
                className="flex items-center gap-2 px-4 py-2 bg-green-primary text-white rounded-lg hover:bg-green-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                {enhancing ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Enhancing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Enhance
                  </>
                )}
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-white text-forest-text rounded-lg hover:bg-green-light/30 transition-colors shadow-sm border border-green-light"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-primary" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="bg-white/80 dark:bg-slate-700/70 rounded-lg p-4 backdrop-blur-sm border border-transparent dark:border-slate-600">
            <p className="text-forest-text dark:text-slate-100 leading-relaxed">
              {generatedPrompt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};