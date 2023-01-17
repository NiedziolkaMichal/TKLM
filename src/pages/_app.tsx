import "../../styles/globals.css";
import "../../styles/fonts.css";
import { SharedHead } from "../components/metaTags";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "../components/util/googleAnalytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SharedHead />
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
