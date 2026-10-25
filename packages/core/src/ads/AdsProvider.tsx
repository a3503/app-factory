import React, { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';

// TODO: Import from react-native-google-mobile-ads when installed
// import mobileAds from 'react-native-google-mobile-ads';

interface AdsContextValue {
  initialized: boolean;
  adsEnabled: boolean;
  setAdsEnabled: (enabled: boolean) => void;
}

const AdsContext = createContext<AdsContextValue>({
  initialized: false,
  adsEnabled: true,
  setAdsEnabled: () => {},
});

export function useAds(): AdsContextValue {
  return useContext(AdsContext);
}

interface AdsProviderProps extends PropsWithChildren {
  /**
   * If false, ads will not be shown (e.g., user purchased no-ads)
   */
  enabled?: boolean;
}

/**
 * Provider that initializes AdMob and manages ad state
 * Wrap your app with this provider after ConsentManager
 */
export function AdsProvider({ children, enabled = true }: AdsProviderProps): JSX.Element {
  const [initialized, setInitialized] = useState(false);
  const [adsEnabled, setAdsEnabled] = useState(enabled);

  useEffect(() => {
    async function initAds() {
      try {
        // TODO: Uncomment when react-native-google-mobile-ads is installed
        // await mobileAds().initialize();
        console.log('[AdsProvider] AdMob initialized (stub)');
        setInitialized(true);
      } catch (error) {
        console.error('[AdsProvider] Failed to initialize AdMob:', error);
      }
    }

    initAds();
  }, []);

  useEffect(() => {
    setAdsEnabled(enabled);
  }, [enabled]);

  return (
    <AdsContext.Provider value={{ initialized, adsEnabled, setAdsEnabled }}>
      {children}
    </AdsContext.Provider>
  );
}
