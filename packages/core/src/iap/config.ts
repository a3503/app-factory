/**
 * Product IDs for in-app purchases
 * Must match products created in App Store Connect and Google Play Console
 */
export const PRODUCTS = {
  REMOVE_ADS: 'remove_ads',
  PRO: 'pro',
} as const;

export type ProductId = typeof PRODUCTS[keyof typeof PRODUCTS];

/**
 * Entitlement identifiers in RevenueCat
 */
export const ENTITLEMENTS = {
  NO_ADS: 'no_ads',
  PRO: 'pro',
} as const;

export type EntitlementId = typeof ENTITLEMENTS[keyof typeof ENTITLEMENTS];
