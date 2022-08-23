import React, { useContext, createContext, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const AuthContext = createContext({});

interface Props {
  children: JSX.Element;
}

function loadStorage(): any {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('tkn');
  }
}

function AuthProvider({ children }: Props) {
  const [token, setToken] = useState<string | null | undefined>(loadStorage());

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
