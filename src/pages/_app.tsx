import "../../styles/globals.css";
import "../../styles/fonts.css";
import { SharedHead } from "../components/sharedHead";
import { GoogleAnalytics } from "nextjs-google-analytics";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SharedHead />
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}
