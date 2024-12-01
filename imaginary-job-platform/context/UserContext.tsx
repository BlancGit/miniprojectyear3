// context/userContext.tsx

'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for our UserContext
type UserContextType = {
  user: { username: string; role: string } | null;
  setUser: (user: { username: string; role: string } | null) => void;
  logout: () => void;
};

// Create the UserContext with a default undefined value
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the UserProvider component that wraps the app and provides the UserContext
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);

  const logout = () => {
    setUser(null); // Clear the user data on logout
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    console.warn('useUser must be used within a UserProvider');
    return {
      user: null,
      login: () => console.warn('Login function is not available. Wrap your components in a UserProvider.'),
      logout: () => console.warn('Logout function is not available. Wrap your components in a UserProvider.'),
    };
  }
  return context;
};
