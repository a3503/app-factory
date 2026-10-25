import { usePurchaseContext } from './PurchaseProvider';

/**
 * Hook to check user's active entitlements
 */
export function useEntitlements() {
  const { noAds, pro, refresh } = usePurchaseContext();
  
  return {
    /**
     * True if user has no-ads entitlement (either directly or via pro)
     */
    noAds: noAds || pro,
    /**
     * True if user has pro entitlement
     */
    pro,
    /**
     * Refresh entitlements from RevenueCat
     */
    refresh,
  };
}
