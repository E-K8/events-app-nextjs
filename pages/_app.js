// this is the root app component which is rendered for every page is being displayed. Application shell

import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next JS events app</title>
        <meta name='description' content='NextJS Events' />
        <meta name='viewport' content='initial-scale=1.0, width=devide-width' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
