/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "static-00.iconduck.com",
      "encrypted-tbn0.gstatic.com",
      "picsum.photos",
      "assets-global.website-files.com",
      "th.bing.com",
      "upload.wikimedia.org",
      "logos-world.net",
    ], // <== Domain name
  },
};

module.exports = nextConfig;
