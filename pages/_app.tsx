import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Script from 'next/script';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
