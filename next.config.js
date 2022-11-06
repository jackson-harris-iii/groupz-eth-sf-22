const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

// const nextConfig = withPWA({
//   // next config
//   // ignoreBuildErrors: true,
//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     // ignoreDuringBuilds: true,
//   },
// });
const nextConfig = {};
module.exports = nextConfig;
