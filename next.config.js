const CSP_GENERAL = {
  "default-src": ["'none'"],
  "script-src": ["'self'"],
  "style-src": ["'self'", "'unsafe-inline'"],
  "font-src": ["'self'"],
  "img-src": ["'self'", "data:"],
  "media-src": ["'self'"],
  "connect-src": ["'self'"],
};
const CSP_DEV = {
  "script-src": ["'unsafe-eval'"],
};

const CSP_GOOGLE_MAPS = {
  "script-src": ["https://*.googleapis.com"],
  "style-src": ["https://fonts.googleapis.com"],
  "font-src": ["https://fonts.gstatic.com"],
  "img-src": ["https://*.googleapis.com", "https://*.gstatic.com", "*.google.com", "*.googleusercontent.com"],
  "connect-src": ["https://*.googleapis.com", "*.google.com", "https://*.gstatic.com"],
};
const CSP_GOOGLE_ANALYTICS = {
  "script-src": ["https://www.googletagmanager.com"],
};

function getCSPValue(pageHasGoogleMaps) {
  const combinedDirectives = {};

  function addDirectives(directives) {
    for (const [directive, sources] of Object.entries(directives)) {
      if (!combinedDirectives.hasOwnProperty(directive)) {
        combinedDirectives[directive] = new Set(sources);
      } else {
        sources.forEach((s) => combinedDirectives[directive].add(s));
      }
    }
  }

  addDirectives(CSP_GENERAL);
  if (process.env.NODE_ENV === "development") {
    addDirectives(CSP_DEV);
  }
  if (pageHasGoogleMaps) {
    addDirectives(CSP_GOOGLE_MAPS);
  }
  addDirectives(CSP_GOOGLE_ANALYTICS);

  return Object.entries(combinedDirectives)
    .map(([k, v]) => k + " " + [...v].join(" "))
    .join(";");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  experimental: {
    runtime: "experimental-edge",
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
          },
        ],
      },
      {
        source: "/",
        headers: [
          {
            key: "Content-Security-Policy",
            value: getCSPValue(true),
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
      {
        source: "/:path((?:img|font|favicon)/[\\s\\S]+|[^\\/]+(?:\\.svg|\\.json|\\.ico))",
        headers: [
          {
            key: "Cache-Control",
            value: "max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
