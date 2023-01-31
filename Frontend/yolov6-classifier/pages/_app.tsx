import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import React from 'react';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Yolov6 Model Classifier</title>
      </Head>
      <Component {...pageProps} />
      </>
  )
};

export default App;
