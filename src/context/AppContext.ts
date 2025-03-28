import { createContext, useContext } from 'react';

type AppContextType = {
  keyword: string;
  setKeyword: (keyword: string) => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }

  return context;
}
