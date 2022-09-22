/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

const { withAxiom } = require('next-axiom');
module.exports = withAxiom(nextConfig)
