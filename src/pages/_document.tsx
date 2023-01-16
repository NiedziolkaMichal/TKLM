import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pl-PL">
      <Head>
        <Script src={`/script/google-analytics.js`} data-measurement-id={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} strategy="beforeInteractive" />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
