const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "styled-components",
  "react-tilt",
  "validator",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins([withTM], nextConfig);
