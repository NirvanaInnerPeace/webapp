/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/webapp',
  assetPrefix: '/webapp',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
