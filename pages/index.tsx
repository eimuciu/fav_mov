import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuthCtx } from '../src/store/authProvider';
import { useDataCtx } from '../src/store/dataProvider';
import { Flex } from '@chakra-ui/react';
import SearchForm from '../src/components/SearchForm/SearchForm';
import Header from '../src/components/Header/Header';
import MoviesList from '../src/components/MoviesList/MoviesList';
import { getMovies } from '../src/api/data';

const mainContainer = {
  justify: 'center',
  align: 'center',
};

const Home: NextPage = () => {
  const { isUserLoggedIn, logout } = useAuthCtx();
  const { data, total, dispatch } = useDataCtx();
  const [page, setPage] = useState(1);
  const [movieTitle, setMovieTitle] = useState('lego');
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push('/login');
      return;
    }
  }, [isUserLoggedIn, router]);

  const getSearchedMovies = async (term: string) => {
    const moviesData = await getMovies(term, 1);
    dispatch({
      type: 'SET_MOVIES',
      payload: { data: moviesData.Search, total: moviesData.totalResults },
    });
    setMovieTitle(term);
    setPage(1);
  };

  const nextPage = async () => {
    if (page * 10 > total) {
      return;
    }
    const moviesData = await getMovies(movieTitle, page + 1);
    dispatch({
      type: 'SET_MOVIES',
      payload: { data: moviesData.Search, total: moviesData.totalResults },
    });
    setPage((prev) => prev + 1);
  };

  const prevPage = async () => {
    if (page - 1 < 1) {
      return;
    }
    const moviesData = await getMovies(movieTitle, page - 1);
    dispatch({
      type: 'SET_MOVIES',
      payload: { data: moviesData.Search, total: moviesData.totalResults },
    });
    setPage((prev) => prev - 1);
  };

  return (
    <>
      {isUserLoggedIn && (
        <Flex {...mainContainer} position={'relative'} direction="column">
          <Header logout={logout} />
          <SearchForm getSearchedMovies={getSearchedMovies} />
          <MoviesList
            data={data}
            totalResults={total}
            page={page}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </Flex>
      )}
    </>
  );
};

export default Home;
