import React from 'react';
import { Card, CardContent } from '../../ui/Card';
import { WellnessGoal } from '../../../types';
import { getIconComponent } from '../../../utils/constants';

interface GoalCardProps {
  goal: WellnessGoal;
  isSelected: boolean;
  onClick: () => void;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal, isSelected, onClick }) => {
  const IconComponent = getIconComponent(goal.icon);

  return (
    <Card 
      isHoverable 
      isSelected={isSelected} 
      onClick={onClick} 
      className="transition-all duration-300 h-full"
    >
      <CardContent className="flex flex-col items-center text-center p-6">
        <div className={`
          w-16 h-16 flex items-center justify-center rounded-full mb-4
          ${isSelected ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'}
          transition-colors duration-300
        `}>
          <IconComponent size={32} />
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{goal.name}</h3>
        <p className="text-sm text-gray-600">{goal.description}</p>
        
        <div className={`
          mt-4 text-sm font-medium
          ${isSelected ? 'text-primary-600' : 'text-gray-500'}
        `}>
          {isSelected ? 'Selected' : 'Click to select'}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalCard;