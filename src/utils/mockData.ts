import { DietPlan, Meal, Supplement, GroceryItem } from '../types';
import { WELLNESS_GOALS } from './constants';

export const generateMockDietPlan = (userId: string, goalTypes: string[]): DietPlan => {
  const selectedGoals = goalTypes.map(type => WELLNESS_GOALS[type as keyof typeof WELLNESS_GOALS]);
  
  // Generate meals based on goals
  const meals = generateMeals(goalTypes);
  
  // Generate supplements based on goals
  const supplements = generateSupplements(goalTypes);
  
  // Generate grocery items based on meals
  const groceryItems = generateGroceryItems(meals);
  
  return {
    id: `plan-${Date.now()}`,
    userId,
    goals: selectedGoals,
    meals,
    supplements,
    groceryItems,
    createdAt: new Date(),
    updatedAt: new Date()
  };
};

const generateMeals = (goalTypes: string[]): Meal[] => {
  const meals: Meal[] = [];
  
  // Breakfast options
  const breakfastOptions: Partial<Meal>[] = [
    {
      name: 'Protein-Packed Greek Yogurt Bowl',
      description: 'High-protein Greek yogurt with berries, nuts, and honey',
      ingredients: ['Greek yogurt', 'Mixed berries', 'Almonds', 'Honey', 'Chia seeds'],
      tags: ['high-protein', 'antioxidants', 'healthy-fats'],
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
      mealType: 'breakfast',
      nutrients: {
        calories: 320,
        protein: 25,
        carbs: 30,
        fat: 12,
        fiber: 6,
        vitamins: { 'Vitamin C': 15, 'Vitamin D': 5 },
        minerals: { 'Calcium': 20, 'Iron': 8 }
      }
    },
    {
      name: 'Antioxidant Smoothie Bowl',
      description: 'Vibrant smoothie bowl with spinach, berries, and collagen peptides',
      ingredients: ['Spinach', 'Blueberries', 'Banana', 'Collagen powder', 'Almond milk', 'Hemp seeds'],
      tags: ['skin-health', 'antioxidants', 'collagen-boosting'],
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
      mealType: 'breakfast',
      nutrients: {
        calories: 280,
        protein: 20,
        carbs: 35,
        fat: 8,
        fiber: 7,
        vitamins: { 'Vitamin A': 25, 'Vitamin C': 30 },
        minerals: { 'Zinc': 15, 'Magnesium': 10 }
      }
    }
  ];
  
  // Lunch options
  const lunchOptions: Partial<Meal>[] = [
    {
      name: 'Mediterranean Salmon Bowl',
      description: 'Grilled salmon with quinoa, mixed greens, and olive oil dressing',
      ingredients: ['Salmon', 'Quinoa', 'Mixed greens', 'Cherry tomatoes', 'Cucumber', 'Olive oil', 'Lemon'],
      tags: ['omega-3', 'anti-inflammatory', 'protein-rich'],
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
      mealType: 'lunch',
      nutrients: {
        calories: 420,
        protein: 30,
        carbs: 35,
        fat: 18,
        fiber: 5,
        vitamins: { 'Vitamin D': 40, 'Vitamin E': 15 },
        minerals: { 'Omega-3': 60, 'Selenium': 25 }
      }
    },
    {
      name: 'Gut-Healing Grain Bowl',
      description: 'Fermented foods and fiber-rich grains to support gut health',
      ingredients: ['Brown rice', 'Kimchi', 'Avocado', 'Soft-boiled egg', 'Sauerkraut', 'Kale', 'Tahini dressing'],
      tags: ['probiotic', 'fiber-rich', 'gut-health'],
      image: 'https://images.pexels.com/photos/5966491/pexels-photo-5966491.jpeg',
      mealType: 'lunch',
      nutrients: {
        calories: 390,
        protein: 18,
        carbs: 45,
        fat: 16,
        fiber: 12,
        vitamins: { 'Vitamin K': 30, 'B-vitamins': 25 },
        minerals: { 'Potassium': 15, 'Magnesium': 20 }
      }
    }
  ];
  
  // Dinner options
  const dinnerOptions: Partial<Meal>[] = [
    {
      name: 'Muscle-Building Baked Chicken',
      description: 'Herb-roasted chicken breast with sweet potatoes and broccoli',
      ingredients: ['Chicken breast', 'Sweet potato', 'Broccoli', 'Olive oil', 'Herbs', 'Garlic'],
      tags: ['high-protein', 'complex-carbs', 'muscle-recovery'],
      image: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg',
      mealType: 'dinner',
      nutrients: {
        calories: 450,
        protein: 40,
        carbs: 30,
        fat: 15,
        fiber: 8,
        vitamins: { 'Vitamin A': 35, 'Vitamin C': 25 },
        minerals: { 'Iron': 15, 'Potassium': 20 }
      }
    },
    {
      name: 'Anti-Aging Salmon & Vegetable Plate',
      description: 'Wild-caught salmon with antioxidant-rich vegetables',
      ingredients: ['Salmon', 'Asparagus', 'Bell peppers', 'Zucchini', 'Garlic', 'Lemon', 'Olive oil'],
      tags: ['anti-aging', 'anti-inflammatory', 'omega-3'],
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg',
      mealType: 'dinner',
      nutrients: {
        calories: 410,
        protein: 35,
        carbs: 20,
        fat: 22,
        fiber: 6,
        vitamins: { 'Vitamin D': 45, 'Vitamin A': 30 },
        minerals: { 'Omega-3': 65, 'Selenium': 40 }
      }
    }
  ];
  
  // Snack options
  const snackOptions: Partial<Meal>[] = [
    {
      name: 'Skin-Glowing Berry & Nut Mix',
      description: 'Antioxidant-rich berries with skin-supporting nuts',
      ingredients: ['Blueberries', 'Walnuts', 'Goji berries', 'Brazil nuts', 'Cacao nibs'],
      tags: ['antioxidants', 'skin-health', 'healthy-fats'],
      image: 'https://images.pexels.com/photos/1171547/pexels-photo-1171547.jpeg',
      mealType: 'snack',
      nutrients: {
        calories: 210,
        protein: 6,
        carbs: 18,
        fat: 14,
        fiber: 5,
        vitamins: { 'Vitamin E': 25, 'Vitamin C': 15 },
        minerals: { 'Selenium': 40, 'Zinc': 15 }
      }
    },
    {
      name: 'Protein Energy Bites',
      description: 'No-bake protein balls perfect for pre or post-workout',
      ingredients: ['Oats', 'Protein powder', 'Nut butter', 'Honey', 'Flaxseed', 'Dark chocolate chips'],
      tags: ['energy-boost', 'muscle-recovery', 'portable'],
      image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg',
      mealType: 'snack',
      nutrients: {
        calories: 180,
        protein: 12,
        carbs: 15,
        fat: 9,
        fiber: 3,
        vitamins: { 'B-vitamins': 10 },
        minerals: { 'Magnesium': 8, 'Iron': 6 }
      }
    }
  ];
  
  // Select meals based on goals
  if (goalTypes.includes('muscle-building')) {
    meals.push(breakfastOptions[0] as Meal, lunchOptions[0] as Meal, dinnerOptions[0] as Meal, snackOptions[1] as Meal);
  }
  
  if (goalTypes.includes('skin-health')) {
    meals.push(breakfastOptions[1] as Meal, snackOptions[0] as Meal);
  }
  
  if (goalTypes.includes('healthy-aging')) {
    meals.push(dinnerOptions[1] as Meal);
  }
  
  if (goalTypes.includes('gut-health')) {
    meals.push(lunchOptions[1] as Meal);
  }
  
  // Ensure we have at least one meal of each type
  const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];
  mealTypes.forEach(type => {
    if (!meals.some(meal => meal.mealType === type)) {
      switch (type) {
        case 'breakfast':
          meals.push(breakfastOptions[0] as Meal);
          break;
        case 'lunch':
          meals.push(lunchOptions[0] as Meal);
          break;
        case 'dinner':
          meals.push(dinnerOptions[0] as Meal);
          break;
        case 'snack':
          meals.push(snackOptions[0] as Meal);
          break;
      }
    }
  });
  
  return meals;
};

const generateSupplements = (goalTypes: string[]): Supplement[] => {
  const supplements: Supplement[] = [];
  
  const supplementOptions: Record<string, Supplement> = {
    'muscle-building': {
      id: 'supp-1',
      name: 'Whey Protein Isolate',
      description: 'High-quality protein to support muscle growth and recovery',
      dosage: '25g (1 scoop)',
      frequency: 'Once daily, post-workout',
      benefits: ['Muscle growth', 'Recovery', 'Satiety', 'Amino acid profile'],
      image: 'https://images.pexels.com/photos/4398370/pexels-photo-4398370.jpeg',
      price: 39.99
    },
    'skin-health': {
      id: 'supp-2',
      name: 'Collagen Peptides',
      description: 'Supports skin elasticity, hydration, and regeneration',
      dosage: '10g (1 scoop)',
      frequency: 'Once daily',
      benefits: ['Skin elasticity', 'Joint health', 'Hair strength', 'Nail growth'],
      image: 'https://images.pexels.com/photos/4397833/pexels-photo-4397833.jpeg',
      price: 29.99
    },
    'healthy-aging': {
      id: 'supp-3',
      name: 'Resveratrol Complex',
      description: 'Powerful antioxidant supporting cellular health and longevity',
      dosage: '1 capsule',
      frequency: 'Once daily with a meal',
      benefits: ['Cellular protection', 'Anti-aging', 'Heart health', 'Brain function'],
      image: 'https://images.pexels.com/photos/4047164/pexels-photo-4047164.jpeg',
      price: 34.99
    },
    'immune-support': {
      id: 'supp-4',
      name: 'Vitamin D3 + K2',
      description: 'Essential vitamins for immune function and bone health',
      dosage: '1 capsule (5000 IU D3, 100mcg K2)',
      frequency: 'Once daily with a fatty meal',
      benefits: ['Immune support', 'Bone health', 'Heart health', 'Vitamin absorption'],
      image: 'https://images.pexels.com/photos/4047167/pexels-photo-4047167.jpeg',
      price: 24.99
    },
    'gut-health': {
      id: 'supp-5',
      name: 'Advanced Probiotic Complex',
      description: 'Multi-strain probiotic formula for optimal gut flora',
      dosage: '1 capsule (50 billion CFU)',
      frequency: 'Once daily, morning',
      benefits: ['Gut microbiome support', 'Digestion', 'Immunity', 'Nutrient absorption'],
      image: 'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg',
      price: 45.99
    },
    'mental-clarity': {
      id: 'supp-6',
      name: 'Omega-3 Fish Oil',
      description: 'High-potency EPA & DHA for brain and cardiovascular health',
      dosage: '1 softgel (1000mg)',
      frequency: 'Twice daily with meals',
      benefits: ['Brain function', 'Focus', 'Memory', 'Mood support'],
      image: 'https://images.pexels.com/photos/4397839/pexels-photo-4397839.jpeg',
      price: 28.99
    }
  };
  
  // Add supplements based on goals
  goalTypes.forEach(goal => {
    if (supplementOptions[goal]) {
      supplements.push(supplementOptions[goal]);
    }
  });
  
  // Add a multivitamin for everyone
  supplements.push({
    id: 'supp-7',
    name: 'Daily Multivitamin',
    description: 'Comprehensive vitamin and mineral formula for daily wellness',
    dosage: '1 tablet',
    frequency: 'Once daily with a meal',
    benefits: ['Overall health', 'Nutrient gaps', 'Energy', 'Immunity'],
    image: 'https://images.pexels.com/photos/4397835/pexels-photo-4397835.jpeg',
    price: 19.99
  });
  
  return supplements;
};

const generateGroceryItems = (meals: Meal[]): GroceryItem[] => {
  // Extract ingredients from meals and create grocery items
  const uniqueIngredients = new Set<string>();
  
  meals.forEach(meal => {
    meal.ingredients.forEach(ingredient => {
      uniqueIngredients.add(ingredient);
    });
  });
  
  const groceryItems: GroceryItem[] = [];
  let id = 1;
  
  Array.from(uniqueIngredients).forEach(ingredient => {
    const categories: Record<string, string> = {
      'Salmon': 'Protein',
      'Chicken breast': 'Protein',
      'Greek yogurt': 'Dairy',
      'Almond milk': 'Dairy Alternative',
      'Spinach': 'Vegetables',
      'Kale': 'Vegetables',
      'Broccoli': 'Vegetables',
      'Asparagus': 'Vegetables',
      'Bell peppers': 'Vegetables',
      'Zucchini': 'Vegetables',
      'Cherry tomatoes': 'Vegetables',
      'Cucumber': 'Vegetables',
      'Sweet potato': 'Vegetables',
      'Blueberries': 'Fruits',
      'Mixed berries': 'Fruits',
      'Banana': 'Fruits',
      'Goji berries': 'Dried Fruits',
      'Kimchi': 'Fermented Foods',
      'Sauerkraut': 'Fermented Foods',
      'Almonds': 'Nuts',
      'Walnuts': 'Nuts',
      'Brazil nuts': 'Nuts',
      'Quinoa': 'Grains',
      'Brown rice': 'Grains',
      'Oats': 'Grains',
      'Olive oil': 'Oils',
      'Chia seeds': 'Seeds',
      'Hemp seeds': 'Seeds',
      'Flaxseed': 'Seeds',
      'Honey': 'Sweeteners',
      'Protein powder': 'Supplements',
      'Collagen powder': 'Supplements',
      'Nut butter': 'Spreads',
      'Tahini': 'Spreads',
      'Garlic': 'Aromatics',
      'Lemon': 'Fruits',
      'Dark chocolate chips': 'Baking',
      'Avocado': 'Fruits',
      'Soft-boiled egg': 'Protein',
      'Cacao nibs': 'Baking'
    };
    
    // Default values if not found in our mapping
    const category = categories[ingredient] || 'Other';
    const unit = category === 'Protein' ? 'lb' : 
                 category === 'Vegetables' || category === 'Fruits' ? 'oz' :
                 category === 'Oils' || category === 'Spreads' ? 'bottle' : 'package';
    
    const quantity = category === 'Protein' ? 1 : 
                     category === 'Vegetables' || category === 'Fruits' ? 16 : 1;
    
    const price = category === 'Protein' ? 9.99 : 
                  category === 'Supplements' ? 24.99 : 
                  category === 'Nuts' || category === 'Seeds' ? 6.99 : 3.99;
                  
    const images: Record<string, string> = {
      'Fruits': 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
      'Vegetables': 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg',
      'Protein': 'https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg',
      'Dairy': 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg',
      'Grains': 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg',
      'Nuts': 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg',
      'default': 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg'
    };
    
    groceryItems.push({
      id: `grocery-${id++}`,
      name: ingredient,
      category,
      quantity,
      unit,
      price,
      image: images[category] || images.default
    });
  });
  
  return groceryItems;
};