import React from 'react';
import { motion } from 'framer-motion';
import GoalCard from './GoalCard';
import Button from '../../ui/Button';
import { WellnessGoal } from '../../../types';
import { WELLNESS_GOALS } from '../../../utils/constants';
import { useUser } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const GoalSelection: React.FC = () => {
  const { selectedGoals, addGoal, removeGoal, generateDietPlan } = useUser();
  const navigate = useNavigate();
  
  const handleGoalClick = (goal: WellnessGoal) => {
    const isSelected = selectedGoals.some(g => g.id === goal.id);
    if (isSelected) {
      removeGoal(goal.id);
    } else {
      addGoal(goal);
    }
  };
  
  const handleSubmit = () => {
    generateDietPlan();
    navigate('/diet-plan');
  };
  
  const goalList = Object.values(WELLNESS_GOALS);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Select Your Wellness Goals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the wellness goals that matter most to you. Our AI will create a personalized
            diet plan to help you achieve these specific goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {goalList.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <GoalCard
                goal={goal}
                isSelected={selectedGoals.some(g => g.id === goal.id)}
                onClick={() => handleGoalClick(goal)}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="mb-6">
            <p className="text-gray-700 font-medium">
              {selectedGoals.length === 0 
                ? 'Select at least one goal to continue' 
                : `You've selected ${selectedGoals.length} goal${selectedGoals.length > 1 ? 's' : ''}`}
            </p>
          </div>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={handleSubmit}
            disabled={selectedGoals.length === 0}
          >
            Generate My Diet Plan
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default GoalSelection;