import { GoalType, WellnessGoal } from '../types';
import { 
  Apple, 
  Dumbbell, 
  Brain, 
  Heart, 
  Sparkles, 
  Shield, 
  Sun, 
  Weight 
} from 'lucide-react';

export const WELLNESS_GOALS: Record<GoalType, WellnessGoal> = {
  'muscle-building': {
    id: 'goal-1',
    type: 'muscle-building',
    name: 'Muscle Building',
    description: 'Increase muscle mass and strength through protein-rich diet and essential nutrients',
    icon: 'Dumbbell'
  },
  'skin-health': {
    id: 'goal-2',
    type: 'skin-health',
    name: 'Glowing Skin',
    description: 'Nourish your skin from within with antioxidant-rich foods and hydration',
    icon: 'Sparkles'
  },
  'healthy-aging': {
    id: 'goal-3',
    type: 'healthy-aging',
    name: 'Healthy Aging',
    description: 'Support longevity and vitality with anti-inflammatory foods and key nutrients',
    icon: 'Sun'
  },
  'weight-loss': {
    id: 'goal-4',
    type: 'weight-loss',
    name: 'Weight Management',
    description: 'Achieve and maintain a healthy weight through balanced nutrition',
    icon: 'Weight'
  },
  'energy-boost': {
    id: 'goal-5',
    type: 'energy-boost',
    name: 'Energy Boost',
    description: 'Increase daily energy levels and reduce fatigue with proper nutrition',
    icon: 'Sparkles'
  },
  'immune-support': {
    id: 'goal-6',
    type: 'immune-support',
    name: 'Immune Support',
    description: 'Strengthen your immune system with key nutrients and antioxidants',
    icon: 'Shield'
  },
  'mental-clarity': {
    id: 'goal-7',
    type: 'mental-clarity',
    name: 'Mental Clarity',
    description: 'Support cognitive function and focus with brain-boosting nutrients',
    icon: 'Brain'
  },
  'gut-health': {
    id: 'goal-8',
    type: 'gut-health',
    name: 'Gut Health',
    description: 'Optimize digestive health with fiber, probiotics, and anti-inflammatory foods',
    icon: 'Apple'
  }
};

export const DIETARY_RESTRICTIONS = [
  'Vegetarian',
  'Vegan',
  'Gluten-Free',
  'Dairy-Free',
  'Keto',
  'Paleo',
  'Low FODMAP',
  'Nut-Free',
  'Low Sodium',
  'Diabetic-Friendly'
];

export const MEAL_TYPES = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Snack'
];

export const MOCK_USER = {
  id: 'user-1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  preferences: {
    dietaryRestrictions: ['Gluten-Free'],
    allergies: ['Peanuts'],
    dislikedFoods: ['Mushrooms', 'Olives'],
    preferredCuisines: ['Mediterranean', 'Asian', 'Mexican']
  },
  goals: []
};

export const getIconComponent = (iconName: string) => {
  const icons = {
    'Dumbbell': Dumbbell,
    'Sparkles': Sparkles,
    'Sun': Sun, 
    'Weight': Weight,
    'Shield': Shield,
    'Brain': Brain,
    'Apple': Apple,
    'Heart': Heart
  };
  
  return icons[iconName as keyof typeof icons] || Sparkles;
};