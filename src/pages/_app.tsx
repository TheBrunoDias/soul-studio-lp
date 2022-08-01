import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Soul Studio - Aulas de Pilates em Telêmaco Borba</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
