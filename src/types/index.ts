export interface User {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
  goals: WellnessGoal[];
  dietPlan?: DietPlan;
}

export interface UserPreferences {
  dietaryRestrictions: string[];
  allergies: string[];
  dislikedFoods: string[];
  preferredCuisines: string[];
}

export type GoalType = 
  | 'muscle-building'
  | 'skin-health'
  | 'healthy-aging'
  | 'weight-loss'
  | 'energy-boost'
  | 'immune-support'
  | 'mental-clarity'
  | 'gut-health';

export interface WellnessGoal {
  id: string;
  type: GoalType;
  name: string;
  description: string;
  icon: string;
}

export interface DietPlan {
  id: string;
  userId: string;
  goals: WellnessGoal[];
  meals: Meal[];
  supplements: Supplement[];
  groceryItems: GroceryItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Meal {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  nutrients: Nutrients;
  tags: string[];
  image: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
}

export interface Supplement {
  id: string;
  name: string;
  description: string;
  dosage: string;
  frequency: string;
  benefits: string[];
  image: string;
  price: number;
}

export interface GroceryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  price: number;
  image: string;
}

export interface Nutrients {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  vitamins: Record<string, number>;
  minerals: Record<string, number>;
}

export interface OrderDetails {
  items: (Supplement | GroceryItem)[];
  totalPrice: number;
  deliveryAddress: string;
  deliveryDate: Date;
  paymentMethod: string;
}

export type AgentAction = 
  | 'order-supplements'
  | 'order-groceries'
  | 'add-to-calendar'
  | 'generate-shopping-list';