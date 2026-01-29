/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  // Uncomment and update if deploying to a repository subdirectory
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
};

module.exports = nextConfig;
