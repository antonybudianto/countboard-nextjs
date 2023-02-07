
const withPWA = require("next-pwa")({
  dest: "public",
});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
};

module.exports = withPWA(config);
