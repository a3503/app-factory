/**
 * @factory/core
 * Shared modules for all apps in the factory
 */

// Ads
export { AdsProvider } from './ads/AdsProvider';
export { BannerAd } from './ads/BannerAd';
export { useInterstitial } from './ads/useInterstitial';
export { useRewarded } from './ads/useRewarded';
export { AD_TEST_IDS } from './ads/config';

// Consent
export { ConsentManager } from './consent/ConsentManager';
export { useConsent } from './consent/useConsent';
export { ATTPrompt } from './consent/ATTPrompt';

// In-App Purchases
export { PurchaseProvider } from './iap/PurchaseProvider';
export { useEntitlements } from './iap/useEntitlements';
export { usePurchases } from './iap/usePurchases';
export { PRODUCTS } from './iap/config';

// Paywall
export { PaywallScreen } from './paywall/PaywallScreen';
export { PaywallButton } from './paywall/PaywallButton';

// Theme
export { ThemeProvider, useTheme } from './theme/ThemeProvider';
export type { Theme, ThemeColors } from './theme/types';

// i18n
export { I18nProvider, useTranslation } from './i18n/I18nProvider';

// Settings
export { SettingsScreen } from './settings/SettingsScreen';

// Legal
export { PrivacyPolicyScreen } from './legal/PrivacyPolicyScreen';
export { TermsScreen } from './legal/TermsScreen';

// Utils
export { useRatePrompt } from './utils/useRatePrompt';
