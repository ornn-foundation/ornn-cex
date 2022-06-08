const path = require('path');

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['th', 'en', 'fr'],
    defaultLocale: 'en',
    localeDetection: false,
    domains: [
      {
        domain: 'example.co.th',
        defaultLocale: 'th',
      },
      {
        domain: 'example.com',
        defaultLocale: 'en',
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    BASE_URL: process.env.BASE_URL,
  },
};
