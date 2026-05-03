import React, { useState, useEffect } from 'react';
import { User, Edit, Save, X, Camera, Mail, Calendar, MapPin, Globe, Briefcase, Heart, Star, Activity, ArrowLeft, Home, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { updateProfile } from 'firebase/auth';

interface ProfileData {
  displayName: string;
  email: string;
  photoURL: string;
  bio: string;
  location: string;
  website: string;
  joinDate: string;
  occupation: string;
  interests: string[];
}

interface UserStats {
  promptsGenerated: number;
  promptsSaved: number;
  totalWords: number;
  favoriteCategory: string;
}

interface ProfilePageProps {
  onBack?: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ onBack }) => {
  const { currentUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'settings' | 'activity'>('overview');

  const [profileData, setProfileData] = useState<ProfileData>({
    displayName: currentUser?.displayName || '',
    email: currentUser?.email || '',
    photoURL: currentUser?.photoURL || '',
    bio: '',
    location: '',
    website: '',
    joinDate: currentUser?.metadata?.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString() : 'Unknown',
    occupation: '',
    interests: []
  });

  const [userStats] = useState<UserStats>({
    promptsGenerated: 42,
    promptsSaved: 18,
    totalWords: 2847,
    favoriteCategory: 'Writing'
  });

  const [newInterest, setNewInterest] = useState('');

  useEffect(() => {
    if (currentUser) {
      setProfileData(prev => ({
        ...prev,
        displayName: currentUser.displayName || '',
        email: currentUser.email || '',
        photoURL: currentUser.photoURL || '',
        joinDate: currentUser.metadata?.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString() : 'Unknown'
      }));
    }
  }, [currentUser]);

  const handleSaveProfile = async () => {
    if (!currentUser) return;
    
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      await updateProfile(currentUser, {
        displayName: profileData.displayName,
        photoURL: profileData.photoURL
      });
      setIsEditing(false);
      setSuccess('Profile updated successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile. Please try again.');
      
      // Clear error message after 5 seconds
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setProfileData(prev => ({
      ...prev,
      displayName: currentUser?.displayName || '',
      photoURL: currentUser?.photoURL || ''
    }));
    setIsEditing(false);
    setError(null);
    setSuccess(null);
  };

  const handleAddInterest = () => {
    if (newInterest.trim() && !profileData.interests.includes(newInterest.trim())) {
      setProfileData(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()]
      }));
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (interest: string) => {
    setProfileData(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddInterest();
    }
  };

  if (!currentUser) {
    return (
      <div className="text-center py-12">
        <p className="text-forest-text">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-secondary mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 hover:text-green-primary transition-colors"
        >
          <Home className="w-4 h-4" />
          Home
        </button>
        <span>/</span>
        <span className="text-forest-text">Profile</span>
      </div>

      {/* Error and Success Messages */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          {success}
        </div>
      )}

      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 text-green-primary hover:bg-green-light/30 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Generator
            </button>
          )}
          <div>
            <h1 className="text-4xl font-bold forest-text mb-2">My Profile</h1>
            <p className="text-secondary">Manage your account and preferences</p>
          </div>
        </div>
      </div>

      {/* Profile Overview Card */}
      <div className="card p-6">
        <div className="flex items-start gap-6">
          <div className="relative">
            {profileData.photoURL ? (
              <img
                src={profileData.photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-green-light"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`w-24 h-24 bg-green-primary rounded-full flex items-center justify-center border-4 border-green-light ${profileData.photoURL ? 'hidden' : ''}`}>
              <User className="w-10 h-10 text-white" />
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 p-2 bg-green-primary rounded-full text-white hover:bg-green-dark transition-colors shadow-lg">
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold forest-text">
                  {profileData.displayName || 'User'}
                </h2>
                <p className="text-secondary flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {profileData.email}
                </p>
                <p className="text-sm text-muted flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {profileData.joinDate}
                </p>
              </div>
              
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn-primary flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSaveProfile}
                    disabled={loading}
                    className="btn-primary flex items-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Save className="w-4 h-4" />
                    )}
                    {loading ? 'Saving...' : 'Save'}
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-4 py-2 border border-green-primary text-green-primary rounded-lg hover:bg-green-light/30 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {profileData.bio && (
              <p className="text-secondary mb-4">{profileData.bio}</p>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-green-light/30 rounded-lg">
                <div className="text-2xl font-bold text-green-primary">{userStats.promptsGenerated}</div>
                <div className="text-sm text-secondary">Prompts Generated</div>
              </div>
              <div className="text-center p-3 bg-green-light/30 rounded-lg">
                <div className="text-2xl font-bold text-green-primary">{userStats.promptsSaved}</div>
                <div className="text-sm text-secondary">Prompts Saved</div>
              </div>
              <div className="text-center p-3 bg-green-light/30 rounded-lg">
                <div className="text-2xl font-bold text-green-primary">{userStats.totalWords}</div>
                <div className="text-sm text-secondary">Total Words</div>
              </div>
              <div className="text-center p-3 bg-green-light/30 rounded-lg">
                <div className="text-2xl font-bold text-green-primary">{userStats.favoriteCategory}</div>
                <div className="text-sm text-secondary">Favorite Category</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-green-light">
        {[
          { id: 'overview', label: 'Overview', icon: User },
          { id: 'settings', label: 'Settings', icon: Edit },
          { id: 'activity', label: 'Activity', icon: Activity }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-green-primary border-b-2 border-green-primary'
                  : 'text-secondary hover:text-green-primary'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Info */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold forest-text mb-4">Personal Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-secondary">{profileData.location || 'Not specified'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-secondary" />
                  <span className="text-secondary">{profileData.website || 'Not specified'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-secondary" />
                  <span className="text-secondary">{profileData.occupation || 'Not specified'}</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold forest-text mb-4">Interests</h3>
              <div className="space-y-3">
                {profileData.interests.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {profileData.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-light text-green-primary rounded-full text-sm flex items-center gap-1"
                      >
                        <Heart className="w-3 h-3" />
                        {interest}
                        {isEditing && (
                          <button
                            onClick={() => handleRemoveInterest(interest)}
                            className="ml-1 hover:text-red-500 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-secondary">No interests added yet.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="card p-6">
            <h3 className="text-lg font-semibold forest-text mb-6">Profile Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium forest-text mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  value={profileData.displayName}
                  onChange={(e) => setProfileData({ ...profileData, displayName: e.target.value })}
                  disabled={!isEditing}
                  className="input-clean w-full disabled:bg-green-light/20"
                  placeholder="Enter your display name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium forest-text mb-2">
                  Bio
                </label>
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  disabled={!isEditing}
                  rows={3}
                  placeholder="Tell us about yourself..."
                  className="input-clean w-full disabled:bg-green-light/20 resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium forest-text mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                    disabled={!isEditing}
                    placeholder="Your location"
                    className="input-clean w-full disabled:bg-green-light/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium forest-text mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    value={profileData.website}
                    onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                    disabled={!isEditing}
                    placeholder="https://yourwebsite.com"
                    className="input-clean w-full disabled:bg-green-light/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium forest-text mb-2">
                  Occupation
                </label>
                <input
                  type="text"
                  value={profileData.occupation}
                  onChange={(e) => setProfileData({ ...profileData, occupation: e.target.value })}
                  disabled={!isEditing}
                  placeholder="Your occupation"
                  className="input-clean w-full disabled:bg-green-light/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium forest-text mb-2">
                  Profile Picture URL
                </label>
                <input
                  type="url"
                  value={profileData.photoURL}
                  onChange={(e) => setProfileData({ ...profileData, photoURL: e.target.value })}
                  disabled={!isEditing}
                  placeholder="https://example.com/photo.jpg"
                  className="input-clean w-full disabled:bg-green-light/20"
                />
              </div>

              {isEditing && (
                <div>
                  <label className="block text-sm font-medium forest-text mb-2">
                    Add Interest
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter an interest..."
                      className="input-clean flex-1"
                    />
                    <button
                      onClick={handleAddInterest}
                      disabled={!newInterest.trim()}
                      className="px-4 py-2 bg-green-primary text-white rounded-lg hover:bg-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Add
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="card p-6">
            <h3 className="text-lg font-semibold forest-text mb-6">Recent Activity</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-green-light/20 rounded-lg">
                <div className="w-10 h-10 bg-green-primary rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium forest-text">Generated a writing prompt</p>
                  <p className="text-sm text-secondary">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-green-light/20 rounded-lg">
                <div className="w-10 h-10 bg-green-primary rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium forest-text">Saved a marketing prompt</p>
                  <p className="text-sm text-secondary">1 day ago</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-green-light/20 rounded-lg">
                <div className="w-10 h-10 bg-green-primary rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium forest-text">Enhanced a prompt with AI</p>
                  <p className="text-sm text-secondary">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 