import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { Mulish } from '@next/font/google';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    fonts: {
      sans: 'mulish',
    },
    colors: { text: '#fffff' },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
