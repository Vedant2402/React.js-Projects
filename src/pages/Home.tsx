import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Apple, ArrowRight, Heart, Brain, ShieldCheck, Sparkles, ShoppingCart } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary-100 rounded-full opacity-30"></div>
          <div className="absolute top-1/3 -left-24 w-96 h-96 bg-secondary-100 rounded-full opacity-40"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-100 rounded-full opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Apple className="text-primary-600 mr-2" size={28} />
                <h1 className="text-2xl font-bold">
                  <span className="text-primary-600">Nutri</span>
                  <span className="text-secondary-600">Agent</span>
                </h1>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                AI-Powered <span className="text-primary-600">Diet Plan</span> for Your Wellness Goals
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                Set your personal wellness goals and get AI-customized diet suggestions. Let our intelligent agent help you order supplements and groceries based on your plan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={() => navigate('/goals')}
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => navigate('/diet-plan')}
                >
                  View Sample Plan
                </Button>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4 max-w-xl">
                {[
                  { icon: <Dumbbell size={16} />, text: "Muscle Building" },
                  { icon: <Sparkles size={16} />, text: "Glowing Skin" },
                  { icon: <Heart size={16} />, text: "Healthy Aging" },
                  { icon: <Brain size={16} />, text: "Mental Clarity" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm"
                  >
                    <span className="text-primary-600 mr-2">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Image/Illustration */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mx-auto max-w-lg">
                <img 
                  src="https://images.pexels.com/photos/5907619/pexels-photo-5907619.jpeg"
                  alt="Healthy food arrangement" 
                  className="rounded-2xl shadow-xl"
                />
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center">
                    <Apple className="text-success-500 mr-2" size={20} />
                    <div>
                      <div className="text-sm font-semibold">Nutrition Analysis</div>
                      <div className="text-xs text-gray-500">AI-powered insights</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center">
                    <ShieldCheck className="text-primary-500 mr-2" size={20} />
                    <div>
                      <div className="text-sm font-semibold">Personalized Plans</div>
                      <div className="text-xs text-gray-500">Tailored to your goals</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-2 bg-gray-400 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform makes it easy to achieve your wellness goals with personalized diet plans and agentic assistance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles size={32} className="text-primary-500" />,
                title: "Set Your Wellness Goals",
                description: "Choose from goals like muscle building, skin health, healthy aging, and more to customize your plan."
              },
              {
                icon: <Apple size={32} className="text-success-500" />,
                title: "Get Personalized Diet Suggestions",
                description: "Our AI analyzes your goals and preferences to create a tailored meal plan and supplement recommendations."
              },
              {
                icon: <ShoppingCart size={32} className="text-secondary-500" />,
                title: "Agentic AI Takes Action",
                description: "Let our intelligent agent place orders for supplements and groceries based on your personalized plan."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to transform your wellness journey?</h2>
            <p className="mb-8 text-white/80">
              Get started today with personalized diet plans tailored to your specific wellness goals.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => navigate('/goals')}
            >
              Start Your Plan Now
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// Make Lucide components available in the scope
function Dumbbell(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell" {...props}><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>
}