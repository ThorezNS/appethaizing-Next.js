import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>appethaizing</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="appetizing! find your favorite recipes with detailed step-by-step instructions"
        />
        <meta name="author" content="Maciej Niemiec" />
        <link rel="icon" href="fork_knife_spoon_icon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
