import { ReactNode, useState } from 'react';
import { AppContext } from './AppContext';

type AppContextProviderProps = {
  children: ReactNode;
};

export default function AppContextProvider({
  children
}: AppContextProviderProps) {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <AppContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </AppContext.Provider>
  );
}
