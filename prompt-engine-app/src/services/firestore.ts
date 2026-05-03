import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { GeneratedPrompt } from '../types';

const PROMPTS_COLLECTION = 'prompts';

export const savePromptToFirestore = async (prompt: GeneratedPrompt, userId: string): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, PROMPTS_COLLECTION), {
      ...prompt,
      userId,
      timestamp: Timestamp.fromDate(prompt.timestamp),
      createdAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving prompt:', error);
    throw error;
  }
};

export const getUserPrompts = async (userId: string): Promise<GeneratedPrompt[]> => {
  try {
    const q = query(
      collection(db, PROMPTS_COLLECTION),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(100)
    );
    
    const querySnapshot = await getDocs(q);
    const prompts: GeneratedPrompt[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      prompts.push({
        id: doc.id,
        content: data.content,
        category: data.category,
        variables: data.variables,
        timestamp: data.timestamp.toDate(),
        favorite: data.favorite || false
      });
    });
    
    return prompts;
  } catch (error) {
    console.error('Error fetching prompts:', error);
    return [];
  }
};

export const deletePromptFromFirestore = async (promptId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, PROMPTS_COLLECTION, promptId));
  } catch (error) {
    console.error('Error deleting prompt:', error);
    throw error;
  }
};

export const updatePromptInFirestore = async (promptId: string, updates: Partial<GeneratedPrompt>): Promise<void> => {
  try {
    await updateDoc(doc(db, PROMPTS_COLLECTION, promptId), updates);
  } catch (error) {
    console.error('Error updating prompt:', error);
    throw error;
  }
};