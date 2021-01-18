import 'dotenv/config';

export default {
  name: 'FSO2020-rate-repository-app',
  slug: 'FSO2020-rate-repository-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: {
    // eslint-disable-next-line no-undef
    env: process.env.ENV,
    // eslint-disable-next-line no-undef
    apolloUri: process.env.APPOLO_URI,
  }
};