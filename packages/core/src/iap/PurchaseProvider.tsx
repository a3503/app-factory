import React, { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';
import { Platform } from 'react-native';

// TODO: Import from react-native-purchases when installed
// import Purchases from 'react-native-purchases';

interface PurchaseContextValue {
  initialized: boolean;
  noAds: boolean;
  pro: boolean;
  refresh: () => Promise<void>;
}

const PurchaseContext = createContext<PurchaseContextValue>({
  initialized: false,
  noAds: false,
  pro: false,
  refresh: async () => {},
});

export function usePurchaseContext(): PurchaseContextValue {
  return useContext(PurchaseContext);
}

interface PurchaseProviderProps extends PropsWithChildren {
  /**
   * RevenueCat API key (use sandbox in dev, production in prod)
   */
  apiKey: string;
}

/**
 * Provider that initializes RevenueCat and tracks entitlements
 */
export function PurchaseProvider({ children, apiKey }: PurchaseProviderProps): JSX.Element {
  const [initialized, setInitialized] = useState(false);
  const [noAds, setNoAds] = useState(false);
  const [pro, setPro] = useState(false);

  const refresh = async () => {
    try {
      // TODO: Implement when package installed
      // const customerInfo = await Purchases.getCustomerInfo();
      // setNoAds(!!customerInfo.entitlements.active['no_ads']);
      // setPro(!!customerInfo.entitlements.active['pro']);
      
      console.log('[PurchaseProvider] Refreshed entitlements (stub)');
    } catch (error) {
      console.error('[PurchaseProvider] Failed to refresh:', error);
    }
  };

  useEffect(() => {
    async function init() {
      try {
        // TODO: Implement when package installed
        // Purchases.configure({ apiKey });
        
        console.log('[PurchaseProvider] RevenueCat initialized (stub)');
        setInitialized(true);
        await refresh();
      } catch (error) {
        console.error('[PurchaseProvider] Failed to initialize:', error);
      }
    }

    init();
  }, [apiKey]);

  // Listen for purchase updates
  useEffect(() => {
    // TODO: Add listener when package installed
    // const listener = Purchases.addCustomerInfoUpdateListener(refresh);
    // return () => listener.remove();
  }, []);

  return (
    <PurchaseContext.Provider value={{ initialized, noAds, pro, refresh }}>
      {children}
    </PurchaseContext.Provider>
  );
}
