// pages/_app.js
import Navbar from '@/components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Navbar />

        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
