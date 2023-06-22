/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      // This allows us to have an SPA and not use NextJS SSR for every page
      // However, NextJS will priortize the rewrites meaning, if a /page exists then we can load it and continue to use SSR!
      {
        source: '/:any*',
        destination: '/'
      }
    ];
  },
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
