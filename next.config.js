const createNextPluginPreval = require('next-plugin-preval/config');
const withNextPluginPreval = createNextPluginPreval();
module.exports = withNextPluginPreval({
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Configuration pour éviter les problèmes de build avec les routes API
  experimental: {
    appDir: true,
  },
  // Configuration pour Vercel
  distDir: '.next',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
});
