import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="N44oozC6jOxHtbF5SgSlA2aDJBHYsk3Es6BeDN2m2PI" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}