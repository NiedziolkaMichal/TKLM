import Head from "next/head";

export function SharedHead({}) {
  //TODO description
  return (
    <Head>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preload" href="/font/Montserrat-minified.woff2" as="font" crossOrigin="" />
      <link rel="apple-touch-icon" href="/favicon/favicon-180.png" />
      <link rel="icon" href="/favicon/favicon-32.png" sizes="32x32" />
      <link rel="icon" href="/favicon/favicon-16.png" sizes="16x16" />
    </Head>
  );
}
