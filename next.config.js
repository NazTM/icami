// // next.config.js
// module.exports = {
//   allowedDevOrigins: ["192.168.0.113"],
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// };

// /** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

module.exports = nextConfig;
