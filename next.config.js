/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: () => {
    return {
      '/': {
        page: '/'
      }
    }
  },
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig
