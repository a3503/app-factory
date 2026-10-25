import { Platform } from 'react-native';

/**
 * AdMob Test IDs - NEVER use real IDs in development
 * Real IDs should come from environment variables in production
 */
export const AD_TEST_IDS = {
  APP_ID: {
    ios: 'ca-app-pub-3940256099942544~1458002511',
    android: 'ca-app-pub-3940256099942544~3347511713',
  },
  BANNER: {
    ios: 'ca-app-pub-3940256099942544/2934735716',
    android: 'ca-app-pub-3940256099942544/6300978111',
  },
  INTERSTITIAL: {
    ios: 'ca-app-pub-3940256099942544/4411468910',
    android: 'ca-app-pub-3940256099942544/1033173712',
  },
  REWARDED: {
    ios: 'ca-app-pub-3940256099942544/1712485313',
    android: 'ca-app-pub-3940256099942544/5224354917',
  },
} as const;

/**
 * Get the appropriate test ID for the current platform
 */
export function getTestId(type: keyof typeof AD_TEST_IDS): string {
  const ids = AD_TEST_IDS[type];
  return Platform.OS === 'ios' ? ids.ios : ids.android;
}

/**
 * Check if we should use test IDs (always true in dev, configurable in prod)
 */
export function shouldUseTestIds(): boolean {
  // TODO: Check environment variable for production
  return __DEV__;
}
