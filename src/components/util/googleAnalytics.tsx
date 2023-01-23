import { useEffect } from "react";
import Script from "next/script";

export function GoogleAnalytics() {
  useInitializeGTag();

  return <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />;
}

declare global {
  // eslint-disable-next-line no-unused-vars
  var dataLayer: unknown[];
}

function useInitializeGTag() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", measurementId);
  }, [measurementId]);
}
