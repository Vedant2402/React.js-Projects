import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import Button from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Edit2, User, AlertTriangle } from 'lucide-react';
import { DIETARY_RESTRICTIONS } from '../utils/constants';

const Profile: React.FC = () => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [preferences, setPreferences] = useState(user.preferences);
  
  const handleSave = () => {
    // In a real app, this would call an API to update the user
    setIsEditing(false);
    alert('Profile preferences updated!');
  };
  
  const toggleDietaryRestriction = (restriction: string) => {
    if (preferences.dietaryRestrictions.includes(restriction)) {
      setPreferences({
        ...preferences,
        dietaryRestrictions: preferences.dietaryRestrictions.filter(r => r !== restriction)
      });
    } else {
      setPreferences({
        ...preferences,
        dietaryRestrictions: [...preferences.dietaryRestrictions, restriction]
      });
    }
  };
  
  const handleAllergiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allergiesArray = e.target.value.split(',').map(a => a.trim()).filter(a => a !== '');
    setPreferences({
      ...preferences,
      allergies: allergiesArray
    });
  };
  
  const handleDislikedFoodsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dislikedArray = e.target.value.split(',').map(a => a.trim()).filter(a => a !== '');
    setPreferences({
      ...preferences,
      dislikedFoods: dislikedArray
    });
  };
  
  const handlePreferredCuisinesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cuisinesArray = e.target.value.split(',').map(a => a.trim()).filter(a => a !== '');
    setPreferences({
      ...preferences,
      preferredCuisines: cuisinesArray
    });
  };
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <User size={40} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
          <p className="text-xl text-white/80">{user.email}</p>
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Profile</h2>
            <Button
              variant={isEditing ? "outline" : "primary"}
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              icon={isEditing ? <AlertTriangle size={16} /> : <Edit2 size={16} />}
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Dietary Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-3">Dietary Restrictions</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {DIETARY_RESTRICTIONS.map(restriction => (
                      <button
                        key={restriction}
                        onClick={() => isEditing && toggleDietaryRestriction(restriction)}
                        disabled={!isEditing}
                        className={`
                          px-3 py-1.5 rounded-full text-sm font-medium transition-colors
                          ${preferences.dietaryRestrictions.includes(restriction)
                            ? 'bg-primary-100 text-primary-700 border-2 border-primary-300'
                            : 'bg-gray-100 text-gray-700 border-2 border-transparent'
                          }
                          ${isEditing ? 'cursor-pointer hover:bg-gray-200' : 'cursor-default'}
                        `}
                      >
                        {restriction}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">Allergies</h3>
                  {isEditing ? (
                    <input
                      type="text"
                      value={preferences.allergies.join(', ')}
                      onChange={handleAllergiesChange}
                      placeholder="Enter allergies separated by commas"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {preferences.allergies.length > 0 ? (
                        preferences.allergies.map((allergy, index) => (
                          <span key={index} className="bg-error-100 text-error-700 px-3 py-1 rounded-full text-sm">
                            {allergy}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-500 text-sm">No allergies specified</span>
                      )}
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">Disliked Foods</h3>
                  {isEditing ? (
                    <input
                      type="text"
                      value={preferences.dislikedFoods.join(', ')}
                      onChange={handleDislikedFoodsChange}
                      placeholder="Enter disliked foods separated by commas"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {preferences.dislikedFoods.length > 0 ? (
                        preferences.dislikedFoods.map((food, index) => (
                          <span key={index} className="bg-warning-100 text-warning-700 px-3 py-1 rounded-full text-sm">
                            {food}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-500 text-sm">No disliked foods specified</span>
                      )}
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">Preferred Cuisines</h3>
                  {isEditing ? (
                    <input
                      type="text"
                      value={preferences.preferredCuisines.join(', ')}
                      onChange={handlePreferredCuisinesChange}
                      placeholder="Enter preferred cuisines separated by commas"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {preferences.preferredCuisines.length > 0 ? (
                        preferences.preferredCuisines.map((cuisine, index) => (
                          <span key={index} className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm">
                            {cuisine}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-500 text-sm">No preferred cuisines specified</span>
                      )}
                    </div>
                  )}
                </div>
                
                {isEditing && (
                  <div className="pt-4 flex justify-end">
                    <Button variant="primary" onClick={handleSave}>
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;