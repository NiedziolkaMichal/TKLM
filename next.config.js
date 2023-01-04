/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "null" /* Vercel sets it to * by default, so we want to disable it */,
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-site",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Strict-transport-security",
            value: "max-age=63072000; includeSubDomains" /* TODO Add preload */,
          }
          //Content-Security-Policy: default-src 'self' 'http://blog.logrocket.com'; image-src 'https://unsplash.com'; script-src 'self' https://www.google-analytics.com; font-src 'self' 'https://fonts.googleapis.com'; 
          /* TODO cache-control, content-security-policy */
        ],
      },
    ];
  },
};

module.exports = nextConfig;
