import React from 'react';
import { motion } from 'framer-motion';
import GoalSelection from '../components/features/goals/GoalSelection';
import { Apple } from 'lucide-react';

const Goals: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Apple className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Set Your Wellness Goals</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Tell us what matters most to you, and we'll create a personalized diet plan to help you achieve your wellness goals.
          </p>
        </div>
      </motion.div>
      
      <GoalSelection />
    </div>
  );
};

export default Goals;