import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../src/theme';


import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp;
