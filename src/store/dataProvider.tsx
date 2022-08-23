import React, { useContext, createContext, useReducer, useEffect } from 'react';
import { useAuthCtx } from './authProvider';
import { getMovies } from '../api/data';

const DataContext = createContext({});

interface Props {
  children: JSX.Element;
}

const initialData: {} = { data: [], total: null };

interface ActionProps {
  type: string;
  payload: any;
}

export function reducer(state: any, action: ActionProps) {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        data: action.payload.data,
        total: action.payload.total,
      };

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
        const dataresp = await getMovies('lego', 1);
        dispatch({
          type: 'SET_MOVIES',
          payload: { data: dataresp.Search, total: dataresp.totalResults },
        });
      };
      downdata();
    }
  }, [isUserLoggedIn]);

  const ctx = { data: data.data, total: data.total, dispatch };

  return <DataContext.Provider value={ctx}>{children}</DataContext.Provider>;
}

export function useDataCtx(): any {
  return useContext(DataContext);
}

export default DataProvider;
