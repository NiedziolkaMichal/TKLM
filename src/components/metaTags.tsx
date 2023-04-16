import Head from "next/head";

export function SharedHead() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preload" href="/font/Montserrat-minified.woff2" as="font" crossOrigin="" />
      <link rel="apple-touch-icon" href="/favicon/favicon-180.png" />
      <meta name="theme-color" content="#303030" />
      <link rel="icon" href="/favicon/favicon-32.png" sizes="32x32" />
      <link rel="icon" href="/favicon/favicon-16.png" sizes="16x16" />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_ABSOLUTE_URL}/og-image.webp`} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
}

export function PageMeta({ title, socialTitle = title, description }: { title: string; socialTitle?: string; description: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta key="og:title" property="og:title" content={socialTitle} />
      <meta key="twitter:title" name="twitter:title" content={socialTitle} />
      <meta key="description" name="description" content={description} />
      <meta key="twitter:description" name="twitter:description" content={description} />
    </Head>
  );
}
