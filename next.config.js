/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React's strict mode in development
  reactStrictMode: true,

  // Custom image settings for external image domains
  images: {
    domains: ['your-domain.com'], // Replace with any domains you're fetching images from
  },

  // Enable styled-components support
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
