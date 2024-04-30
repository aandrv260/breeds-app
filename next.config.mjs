/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
      },
    ],
  },
  // Turned it off so it the app doesn't fetch the images twice in /breeds route
  reactStrictMode: false,
};

export default nextConfig;
