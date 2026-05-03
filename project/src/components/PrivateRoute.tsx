import React, { ReactNode } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Login from '../pages/Login';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { currentUser } = useAuth();
  
  return currentUser ? <>{children}</> : <Login />;
};

export default PrivateRoute;