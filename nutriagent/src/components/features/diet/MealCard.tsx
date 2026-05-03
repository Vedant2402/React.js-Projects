import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../ui/Card';
import { Meal } from '../../../types';
import { Info } from 'lucide-react';
import Button from '../../ui/Button';

interface MealCardProps {
  meal: Meal;
  onAddToCart: () => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onAddToCart }) => {
  const [showNutrients, setShowNutrients] = useState(false);

  const toggleNutrients = () => {
    setShowNutrients(!showNutrients);
  };

  return (
    <Card isHoverable className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img 
          src={meal.image} 
          alt={meal.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-xs font-medium text-primary-600 shadow">
          {meal.mealType.charAt(0).toUpperCase() + meal.mealType.slice(1)}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle>{meal.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm mb-4">{meal.description}</p>
        
        <div className="mb-3">
          <h4 className="text-sm font-semibold mb-1">Key Ingredients:</h4>
          <ul className="text-xs text-gray-600 flex flex-wrap gap-1">
            {meal.ingredients.slice(0, 5).map((ingredient, index) => (
              <li key={index} className="bg-gray-100 rounded-full px-2 py-1">
                {ingredient}
              </li>
            ))}
            {meal.ingredients.length > 5 && (
              <li className="bg-gray-100 rounded-full px-2 py-1">
                +{meal.ingredients.length - 5} more
              </li>
            )}
          </ul>
        </div>
        
        <div className="mb-3">
          <h4 className="text-sm font-semibold mb-1">Benefits:</h4>
          <div className="flex flex-wrap gap-1">
            {meal.tags.map((tag, index) => (
              <span key={index} className="inline-block bg-primary-100 text-primary-700 rounded-full px-2 py-1 text-xs">
                {tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <button 
            onClick={toggleNutrients}
            className="text-xs flex items-center text-secondary-600 hover:text-secondary-700"
          >
            <Info size={14} className="mr-1" />
            {showNutrients ? 'Hide Nutrition Facts' : 'Show Nutrition Facts'}
          </button>
          
          {showNutrients && (
            <div className="mt-2 p-2 bg-gray-50 rounded-md text-xs">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div className="flex justify-between">
                  <span>Calories:</span>
                  <span className="font-medium">{meal.nutrients.calories}</span>
                </div>
                <div className="flex justify-between">
                  <span>Protein:</span>
                  <span className="font-medium">{meal.nutrients.protein}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbs:</span>
                  <span className="font-medium">{meal.nutrients.carbs}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Fat:</span>
                  <span className="font-medium">{meal.nutrients.fat}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Fiber:</span>
                  <span className="font-medium">{meal.nutrients.fiber}g</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          variant="secondary" 
          size="sm" 
          fullWidth
          onClick={onAddToCart}
        >
          Add Ingredients to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealCard;