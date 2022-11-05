import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
