import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="zyjCR1hAnFX_brP8iWxnh1pkWYguc1oK6_4XrMfKFqs" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}