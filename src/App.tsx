import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </UserProvider>
  );
}

export default App;