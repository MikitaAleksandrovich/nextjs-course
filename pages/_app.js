import Head from "next/head";
import Layout from "@/components/layout/layput";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next js events</title>
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1.0 width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
