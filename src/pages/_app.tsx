import "../../styles/globals.css";
import "../../styles/fonts.css";
import { SharedHead } from "../components/sharedHead";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SharedHead />
      <Component {...pageProps} />
    </>
  );
}
