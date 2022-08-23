import React, { useContext, createContext, useReducer, useEffect } from 'react';
import { useAuthCtx } from './authProvider';
import { getMovies } from '../api/data';

const DataContext = createContext({});

interface Props {
  children: JSX.Element;
}

const initialData: [] = [];

interface ActionProps {
  type: string;
  payload: any;
}

export function reducer(state: any, action: ActionProps) {
  switch (action.type) {
    case 'SET_MOVIES':
      return [...action.payload];

    default:
      return state;
  }
}

function DataProvider({ children }: Props) {
  const [data, dispatch] = useReducer(reducer, initialData);
  const { isUserLoggedIn } = useAuthCtx();

  useEffect(() => {
    if (isUserLoggedIn) {
      const downdata = async () => {
        const dataresp = await getMovies();
        dispatch({ type: 'SET_MOVIES', payload: dataresp.Search });
      };
      downdata();
    }
  }, [isUserLoggedIn]);

  const ctx = { data, dispatch };

  return <DataContext.Provider value={ctx}>{children}</DataContext.Provider>;
}

export function useDataCtx(): any {
  return useContext(DataContext);
}

export default DataProvider;
