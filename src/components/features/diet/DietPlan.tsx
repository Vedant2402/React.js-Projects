import React from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../../context/UserContext';
import MealCard from './MealCard';
import SupplementCard from './SupplementCard';
import AgentActions from '../agent/AgentActions';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { RefreshCw, ShoppingCart } from 'lucide-react';

const DietPlan: React.FC = () => {
  const { dietPlan, isLoading, generateDietPlan, selectedGoals } = useUser();
  const navigate = useNavigate();
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="mb-6 relative">
            <div className="w-20 h-20 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto"></div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Creating Your Custom Diet Plan</h2>
          <p className="text-gray-600 mb-8">
            Our AI is analyzing your goals and generating personalized recommendations...
          </p>
        </motion.div>
      </div>
    );
  }
  
  if (!dietPlan && selectedGoals.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4">No Diet Plan Yet</h2>
          <p className="text-gray-600 mb-8">
            You haven't selected any wellness goals yet. Select your goals to get a personalized diet plan.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/goals')}
          >
            Select Goals
          </Button>
        </motion.div>
      </div>
    );
  }
  
  if (!dietPlan) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Generate Your Diet Plan</h2>
          <p className="text-gray-600 mb-8">
            Based on your selected goals, we can create a personalized diet plan for you.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={generateDietPlan}
          >
            Generate My Diet Plan
          </Button>
        </motion.div>
      </div>
    );
  }
  
  // Group meals by meal type
  const mealsByType = dietPlan.meals.reduce((acc, meal) => {
    const type = meal.mealType;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(meal);
    return acc;
  }, {} as Record<string, typeof dietPlan.meals>);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-2">Your Personalized Diet Plan</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Based on your selected goals, our AI has created a personalized diet plan to help you achieve optimal results.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {dietPlan.goals.map((goal) => (
            <span 
              key={goal.id} 
              className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {goal.name}
            </span>
          ))}
        </div>
        
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="sm"
            icon={<RefreshCw size={16} />}
            onClick={generateDietPlan}
          >
            Refresh Plan
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={<ShoppingCart size={16} />}
            onClick={() => {
              // This would typically navigate to checkout or call the agent
              alert('This would typically call the agentic AI to place an order');
            }}
          >
            Order All Ingredients
          </Button>
        </div>
      </motion.div>
      
      {/* Agent Actions */}
      <AgentActions />
      
      {/* Meal Plan Section */}
      {Object.entries(mealsByType).map(([type, meals], typeIndex) => (
        <motion.section 
          key={type}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + typeIndex * 0.1 }}
          className="mb-10"
        >
          <h3 className="text-2xl font-bold mb-6 capitalize">
            {type}s
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map((meal, index) => (
              <motion.div
                key={meal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <MealCard 
                  meal={meal} 
                  onAddToCart={() => {
                    // This would typically call the agent to add items to cart
                    alert(`Added ${meal.name} ingredients to cart`);
                  }} 
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}
      
      {/* Supplements Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-10"
      >
        <h3 className="text-2xl font-bold mb-6">Recommended Supplements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dietPlan.supplements.map((supplement, index) => (
            <motion.div
              key={supplement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <SupplementCard 
                supplement={supplement} 
                onAddToCart={() => {
                  // This would typically call the agent to add supplement to cart
                  alert(`Added ${supplement.name} to cart`);
                }} 
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default DietPlan;