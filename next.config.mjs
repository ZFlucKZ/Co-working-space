/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  redirects() {
    return [];
  },
  images: {
    remotePatterns: [{ hostname: 'img.freepik.com' }],
  },
};

export default nextConfig;
