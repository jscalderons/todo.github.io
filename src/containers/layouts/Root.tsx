import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';

const Root = () => (
  <main className='h-screen'>
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  </main>
);

export default Root;