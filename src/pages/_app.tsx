import "../../styles/globals.css";
import "../../styles/fonts.css";
import { SharedHead } from "../components/sharedHead";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "../components/util/GoogleAnalytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SharedHead />
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
