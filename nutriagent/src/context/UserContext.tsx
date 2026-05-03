import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, WellnessGoal, DietPlan } from '../types';
import { MOCK_USER } from '../utils/constants';
import { generateMockDietPlan } from '../utils/mockData';

interface UserContextType {
  user: User;
  isLoading: boolean;
  selectedGoals: WellnessGoal[];
  dietPlan: DietPlan | null;
  addGoal: (goal: WellnessGoal) => void;
  removeGoal: (goalId: string) => void;
  generateDietPlan: () => void;
  clearGoals: () => void;
  clearDietPlan: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(MOCK_USER);
  const [selectedGoals, setSelectedGoals] = useState<WellnessGoal[]>([]);
  const [dietPlan, setDietPlan] = useState<DietPlan | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addGoal = (goal: WellnessGoal) => {
    if (!selectedGoals.some(g => g.id === goal.id)) {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const removeGoal = (goalId: string) => {
    setSelectedGoals(selectedGoals.filter(goal => goal.id !== goalId));
  };

  const clearGoals = () => {
    setSelectedGoals([]);
  };

  const clearDietPlan = () => {
    setDietPlan(null);
  };

  const generateDietPlan = () => {
    setIsLoading(true);
    
    // In a real app, this would be an API call to the AI service
    setTimeout(() => {
      const goalTypes = selectedGoals.map(goal => goal.type);
      const newDietPlan = generateMockDietPlan(user.id, goalTypes);
      setDietPlan(newDietPlan);
      setIsLoading(false);
    }, 2000);
  };

  // Update user with selected goals
  useEffect(() => {
    setUser(prevUser => ({
      ...prevUser,
      goals: selectedGoals
    }));
  }, [selectedGoals]);

  return (
    <UserContext.Provider value={{
      user,
      isLoading,
      selectedGoals,
      dietPlan,
      addGoal,
      removeGoal,
      generateDietPlan,
      clearGoals,
      clearDietPlan
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};