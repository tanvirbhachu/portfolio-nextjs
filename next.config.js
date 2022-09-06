/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const { withAxiom } = require('next-axiom');
module.exports = withAxiom(nextConfig)
