import React from 'react';
import { motion } from 'framer-motion';
import DietPlan from '../components/features/diet/DietPlan';
import { Apple } from 'lucide-react';
import { useUser } from '../context/UserContext';

const DietPlanPage: React.FC = () => {
  const { dietPlan } = useUser();

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`
          py-16 text-white
          ${dietPlan 
            ? 'bg-gradient-to-r from-success-600 to-primary-600' 
            : 'bg-gradient-to-r from-primary-600 to-secondary-600'}
        `}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Apple className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Your Personalized Diet Plan</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {dietPlan 
              ? 'Here\'s your AI-generated diet plan tailored to your wellness goals.' 
              : 'Select your wellness goals to generate a personalized diet plan.'}
          </p>
        </div>
      </motion.div>
      
      <DietPlan />
    </div>
  );
};

export default DietPlanPage;