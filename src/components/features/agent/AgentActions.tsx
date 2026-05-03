import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, ShoppingCart, CalendarCheck, FileText } from 'lucide-react';
import Button from '../../ui/Button';
import { Card, CardContent } from '../../ui/Card';
import { AgentAction } from '../../../types';
import OrderModal from './OrderModal';

const AgentActions: React.FC = () => {
  const [isAgentOpen, setIsAgentOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState<AgentAction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleAgentToggle = () => {
    setIsAgentOpen(!isAgentOpen);
  };
  
  const handleActionClick = (action: AgentAction) => {
    setCurrentAction(action);
    
    if (action === 'order-supplements' || action === 'order-groceries') {
      setIsModalOpen(true);
    } else {
      // For other actions, we'd typically call a backend service
      alert(`The AI agent would now help you with: ${action.replace('-', ' ')}`);
    }
  };
  
  return (
    <>
      <motion.div 
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Button
          onClick={handleAgentToggle}
          variant="primary"
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center p-0"
          aria-label="Open Agent"
        >
          <Bot size={24} />
        </Button>
        
        {isAgentOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: -10 }}
            className="absolute bottom-16 right-0 mb-2"
          >
            <Card className="w-64 shadow-xl">
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold mb-3">Agent Actions</h4>
                
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth 
                    onClick={() => handleActionClick('order-supplements')}
                    className="justify-start"
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Order Supplements
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth
                    onClick={() => handleActionClick('order-groceries')}
                    className="justify-start"
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Order Groceries
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth
                    onClick={() => handleActionClick('add-to-calendar')}
                    className="justify-start"
                  >
                    <CalendarCheck size={16} className="mr-2" />
                    Add to Calendar
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth
                    onClick={() => handleActionClick('generate-shopping-list')}
                    className="justify-start"
                  >
                    <FileText size={16} className="mr-2" />
                    Generate Shopping List
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
      
      {isModalOpen && currentAction && (
        <OrderModal
          action={currentAction}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default AgentActions;