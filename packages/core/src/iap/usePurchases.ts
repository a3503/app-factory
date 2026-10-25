import { useCallback, useState } from 'react';
import { PRODUCTS, ProductId } from './config';
import { usePurchaseContext } from './PurchaseProvider';

// TODO: Import from react-native-purchases when installed
// import Purchases from 'react-native-purchases';

interface UsePurchasesReturn {
  /**
   * Purchase a product by ID
   */
  purchase: (productId: ProductId) => Promise<boolean>;
  /**
   * Restore previous purchases
   */
  restore: () => Promise<boolean>;
  /**
   * Whether a purchase is in progress
   */
  isPurchasing: boolean;
  /**
   * Error from last purchase attempt
   */
  error: string | null;
}

/**
 * Hook for making purchases and restoring
 */
export function usePurchases(): UsePurchasesReturn {
  const { refresh } = usePurchaseContext();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const purchase = useCallback(async (productId: ProductId): Promise<boolean> => {
    setIsPurchasing(true);
    setError(null);

    try {
      // TODO: Implement when package installed
      // const { customerInfo } = await Purchases.purchaseProduct(productId);
      
      console.log('[usePurchases] Purchase complete (stub):', productId);
      await refresh();
      setIsPurchasing(false);
      return true;
    } catch (err) {
      console.error('[usePurchases] Purchase failed:', err);
      setError(err instanceof Error ? err.message : 'Purchase failed');
      setIsPurchasing(false);
      return false;
    }
  }, [refresh]);

  const restore = useCallback(async (): Promise<boolean> => {
    setIsPurchasing(true);
    setError(null);

    try {
      // TODO: Implement when package installed
      // const customerInfo = await Purchases.restorePurchases();
      
      console.log('[usePurchases] Restore complete (stub)');
      await refresh();
      setIsPurchasing(false);
      return true;
    } catch (err) {
      console.error('[usePurchases] Restore failed:', err);
      setError(err instanceof Error ? err.message : 'Restore failed');
      setIsPurchasing(false);
      return false;
    }
  }, [refresh]);

  return {
    purchase,
    restore,
    isPurchasing,
    error,
  };
}
