import { createContext, useContext, useState, ReactNode } from 'react';
import { IconTypes } from '../components/icons/Icon';


type IconsContextType = {
  selectedIcon: IconTypes;
  handleClick: (name: IconTypes) => void;
  resetSelection: () => void;
};

export const IconsContext = createContext<IconsContextType | undefined>(
  undefined
);
export const IconsContextProvider = IconsContext.Provider;

export const useIconsContext = (): IconsContextType => {
  const context = useContext(IconsContext);
  if (context === undefined) {
    throw new Error('useIconsContext must be used within a IconsProvider');
  }
  return context;
};

type IconsProviderProps = {
  children: ReactNode;
};

export const IconsProvider: React.FC<IconsProviderProps> = ({ children }) => {
  const [selectedIcon, setSelectedIcon] = useState<IconTypes>('message');

  const handleClick = (name: IconTypes) => {
    setSelectedIcon(name);
  };

  const resetSelection = () => {
    setSelectedIcon('message');
  };

  return (
    <IconsContextProvider value={{ selectedIcon, handleClick, resetSelection }}>
      {children}
    </IconsContextProvider>
  );
};
