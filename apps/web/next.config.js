/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui", "@vibecheck/lib"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  }
};
