import { createContext } from 'react';
type UserType = {
  user: string;
  contact: string;
};
export const UsersContext = createContext<UserType>({ user: '', contact: '' });
