const template = require("./helpers/template")

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${template}:path*`,
      },
    ]
  },
};