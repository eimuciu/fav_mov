import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuthCtx } from '../src/store/authProvider';
import { useDataCtx } from '../src/store/dataProvider';
import { Flex } from '@chakra-ui/react';
import SearchForm from '../src/components/SearchForm/SearchForm';
import Header from '../src/components/Header/Header';
import MoviesList from '../src/components/MoviesList/MoviesList';

const mainContainer = {
  justify: 'center',
  align: 'center',
};

const Home: NextPage = () => {
  const { isUserLoggedIn, logout } = useAuthCtx();
  const { data } = useDataCtx();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push('/login');
      return;
    }
  }, [isUserLoggedIn, router]);

  return (
    <>
      {isUserLoggedIn && (
        <Flex {...mainContainer} position={'relative'} direction="column">
          <Header logout={logout} />
          <SearchForm />
          <MoviesList data={data} />
        </Flex>
      )}
    </>
  );
};

export default Home;
