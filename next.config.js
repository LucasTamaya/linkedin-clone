const template = require("./helpers/template")

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/auth/sign-in',
        destination: `${template}api/auth/.sign-in*`,
      },
    ]
  },
};