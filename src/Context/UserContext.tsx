import React, { createContext, useState, ReactNode } from 'react';

interface User {
  usuario: string;
  clave: string;
  email: string;
  telefono: string;
  direccion: string;
}

interface UserContextProps {
  users: User[];
  addUser: (user: User) => void;
}

export const UserContext = createContext<UserContextProps>({
  users: [],
  addUser: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
