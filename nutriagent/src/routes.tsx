import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import Goals from './pages/Goals';
import DietPlanPage from './pages/DietPlanPage';
import Profile from './pages/Profile';
import App from './App';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'goals',
        element: <Goals />
      },
      {
        path: 'diet-plan',
        element: <DietPlanPage />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  }
];

const Router: React.FC = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default Router;