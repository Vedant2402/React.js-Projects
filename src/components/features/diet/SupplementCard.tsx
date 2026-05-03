import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/Card';
import { Supplement } from '../../../types';
import { Check } from 'lucide-react';
import Button from '../../ui/Button';

interface SupplementCardProps {
  supplement: Supplement;
  onAddToCart: () => void;
}

const SupplementCard: React.FC<SupplementCardProps> = ({ supplement, onAddToCart }) => {
  return (
    <Card isHoverable className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center">
        <img 
          src={supplement.image} 
          alt={supplement.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle>{supplement.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm mb-4">{supplement.description}</p>
        
        <div className="mb-3">
          <h4 className="text-sm font-semibold mb-1">Dosage:</h4>
          <p className="text-sm text-gray-600">{supplement.dosage}</p>
        </div>
        
        <div className="mb-3">
          <h4 className="text-sm font-semibold mb-1">Frequency:</h4>
          <p className="text-sm text-gray-600">{supplement.frequency}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-1">Benefits:</h4>
          <ul className="text-sm text-gray-600">
            {supplement.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center mb-1">
                <Check size={14} className="text-success-500 mr-1 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <div className="w-full flex items-center justify-between">
          <span className="font-semibold text-gray-900">${supplement.price.toFixed(2)}</span>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={onAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SupplementCard;