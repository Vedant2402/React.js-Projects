import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Check, AlertTriangle, Loader2 } from 'lucide-react';
import Button from '../../ui/Button';
import { AgentAction, OrderDetails } from '../../../types';
import { useUser } from '../../../context/UserContext';

interface OrderModalProps {
  action: AgentAction;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ action, onClose }) => {
  const { dietPlan } = useUser();
  const [stage, setStage] = useState<'confirming' | 'processing' | 'complete'>('confirming');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  
  // Mock data for the order process
  useEffect(() => {
    if (stage === 'processing') {
      const timer = setTimeout(() => {
        // Create mock order details
        const items = action === 'order-supplements' 
          ? dietPlan?.supplements || []
          : dietPlan?.groceryItems.slice(0, 10) || [];
          
        const totalPrice = items.reduce((total, item) => total + item.price, 0);
        
        setOrderDetails({
          items,
          totalPrice,
          deliveryAddress: '123 Health St, Wellness City, 90210',
          deliveryDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
          paymentMethod: 'Credit Card (**** 4242)'
        });
        
        setStage('complete');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [stage, action, dietPlan]);
  
  const handleConfirm = () => {
    setStage('processing');
  };
  
  const actionTitle = action === 'order-supplements' 
    ? 'Order Supplements' 
    : 'Order Groceries';
  
  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  
  const modal = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', duration: 0.5 } }
  };
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      initial="hidden"
      animate="visible"
      variants={backdrop}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg w-full max-w-md mx-4 overflow-hidden"
        variants={modal}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary-600 text-white px-6 py-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold">{actionTitle}</h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {stage === 'confirming' && (
            <div>
              <div className="flex items-start mb-6">
                <div className="bg-primary-100 p-2 rounded-full mr-3 mt-1">
                  <AlertTriangle size={20} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">AI Agent Confirmation</h4>
                  <p className="text-gray-600 text-sm">
                    I'll help you {action === 'order-supplements' ? 'order the recommended supplements' : 'order groceries for your meal plan'}. This would connect to external services to complete the purchase. Would you like to proceed?
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-gray-900 mb-2">
                  What I'll do:
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <Check size={16} className="text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Find the best prices for {action === 'order-supplements' ? 'supplements' : 'ingredients'}</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Check for any potential interactions or allergies</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Place the order with your preferred provider</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Notify you when your order is confirmed</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-3 justify-end">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleConfirm}>
                  Confirm
                </Button>
              </div>
            </div>
          )}
          
          {stage === 'processing' && (
            <div className="py-8 flex flex-col items-center">
              <Loader2 size={40} className="text-primary-600 animate-spin mb-4" />
              <h4 className="font-medium text-gray-900 mb-2">Processing Your Order</h4>
              <p className="text-gray-600 text-sm text-center">
                The AI agent is working on your order. This includes finding the best products, comparing prices, and preparing your order.
              </p>
            </div>
          )}
          
          {stage === 'complete' && orderDetails && (
            <div>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-success-100 p-3 rounded-full">
                  <Check size={24} className="text-success-600" />
                </div>
              </div>
              
              <h4 className="font-medium text-gray-900 mb-4 text-center">Order Successfully Placed!</h4>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h5 className="font-medium text-gray-900 mb-2 text-sm">Order Summary:</h5>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Items:</span>
                    <span>{orderDetails.items.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Price:</span>
                    <span className="font-medium">${orderDetails.totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery to:</span>
                    <span className="text-right">{orderDetails.deliveryAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Delivery:</span>
                    <span>{orderDetails.deliveryDate.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Method:</span>
                    <span>{orderDetails.paymentMethod}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="primary" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OrderModal;