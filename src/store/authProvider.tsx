import React, { useContext, createContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

interface Props {
  children: JSX.Element;
}

function AuthProvider({ children }: Props) {
  const [token, setToken] = useState<string | null>('');

  useEffect(() => {
    const tkn = sessionStorage.getItem('tkn');
    setToken(tkn);
  }, []);

  const login = (tkn: string) => {
    sessionStorage.setItem('tkn', tkn);
    setToken(tkn);
  };

  const logout = () => {
    sessionStorage.removeItem('tkn');
    setToken(null);
  };

  const ctx = { login, logout, isUserLoggedIn: !!token };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}

export function useAuthCtx(): any {
  return useContext(AuthContext);
}

export default AuthProvider;
