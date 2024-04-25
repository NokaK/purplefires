import type { AppProps } from "next/app";
import "../assets/styles/globals.css";
import Head from "next/head";

import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  return (
    <>
      <Head>
        <base href="/" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PurpleFire</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
