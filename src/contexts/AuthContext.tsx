import React, { createContext }  from 'react';
import User from '../types/UserType';

type AuthContextValue = {
  user: User;
}

export const authContext = createContext<AuthContextValue>({ user: { login: false } });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const user: User = {
    login: false,
  }

  return (
    <authContext.Provider value={{ user }}>
      {children}
    </authContext.Provider>
  );
}
