module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    localePath: './locales',
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  fallbackLng: {
    default: ['pt'],
    en: ['pt'],
    es: ['pt'],
  },
  debug: process.env.NODE_ENV === 'development',
  serializeConfig: false,
  use: [
    require('i18next-fs-backend'),
  ],
  ns: ['common'],
  defaultNS: 'common',
};
