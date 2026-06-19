module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, { isServer }) {
    if (isServer) {
      const existingExternals = Array.isArray(config.externals)
        ? config.externals
        : [config.externals].filter(Boolean);
      config.externals = [...existingExternals, 'jsdom'];
    }
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      { source: '/', destination: '/home' },
      { source: '/admin', destination: '/admin/index.html' },
    ];
  },
};
