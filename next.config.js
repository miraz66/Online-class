/** @type {import('next').NextConfig} */

// next.config.js
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.unsplash.com"], // Add the Unsplash domain here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-*/**", // Adjust the pathname pattern as needed
      },
    ],
  },
};
