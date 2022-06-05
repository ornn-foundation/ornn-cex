const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    BASE_URL: process.env.BASE_URL,
  },
};
