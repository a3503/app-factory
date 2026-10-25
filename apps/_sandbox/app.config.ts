import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: '_sandbox',
  slug: '_sandbox',
  version: '0.0.1',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.a3503.sandbox',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.a3503.sandbox',
  },
  extra: {
    eas: {
      projectId: 'YOUR_PROJECT_ID', // Set after eas init
    },
    // Use test IDs - real IDs come from EAS secrets in production
    admobAppId: __DEV__ 
      ? 'ca-app-pub-3940256099942544~3347511713' // Test
      : process.env.ADMOB_APP_ID,
    admobBannerId: __DEV__
      ? 'ca-app-pub-3940256099942544/6300978111' // Test
      : process.env.ADMOB_BANNER_ID,
    admobInterstitialId: __DEV__
      ? 'ca-app-pub-3940256099942544/1033173712' // Test
      : process.env.ADMOB_INTERSTITIAL_ID,
    revenuecatApiKey: process.env.REVENUECAT_API_KEY || 'sandbox_key',
  },
  plugins: [
    'expo-router',
    // TODO: Add when packages installed
    // 'react-native-google-mobile-ads',
    // ['expo-tracking-transparency', { userTrackingPermission: 'This allows us to provide personalized ads.' }],
  ],
});
