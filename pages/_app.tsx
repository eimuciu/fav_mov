import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import AuthProvider from '../src/store/authProvider';
import DataProvider from '../src/store/dataProvider';
import { ChakraProvider } from '@chakra-ui/react';
import MainSkeleton from '../src/components/MainSkeleton/MainSkeleton';

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  }
  return (
    <AuthProvider>
      <DataProvider>
        <ChakraProvider>
          <MainSkeleton>
            <Component {...pageProps} />
          </MainSkeleton>
        </ChakraProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default MyApp;
