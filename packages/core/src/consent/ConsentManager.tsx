import React, { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';
import { Platform } from 'react-native';

// TODO: Import from react-native-google-mobile-ads when installed
// import { AdsConsent, AdsConsentStatus } from 'react-native-google-mobile-ads';

interface ConsentContextValue {
  status: 'unknown' | 'required' | 'obtained' | 'not_required';
  canShowPersonalizedAds: boolean;
  isReady: boolean;
}

const ConsentContext = createContext<ConsentContextValue>({
  status: 'unknown',
  canShowPersonalizedAds: false,
  isReady: false,
});

export function useConsentContext(): ConsentContextValue {
  return useContext(ConsentContext);
}

/**
 * Provider that handles UMP consent for GDPR compliance
 * Must wrap AdsProvider - consent must be obtained before requesting ads
 */
export function ConsentManager({ children }: PropsWithChildren): JSX.Element {
  const [status, setStatus] = useState<ConsentContextValue['status']>('unknown');
  const [canShowPersonalizedAds, setCanShowPersonalizedAds] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function checkConsent() {
      try {
        // TODO: Implement when package installed
        // const consentInfo = await AdsConsent.requestInfoUpdate();
        // 
        // if (consentInfo.isConsentFormAvailable && 
        //     consentInfo.status === AdsConsentStatus.REQUIRED) {
        //   await AdsConsent.showForm();
        // }
        // 
        // setStatus(consentInfo.status);
        // setCanShowPersonalizedAds(consentInfo.canRequestAds);
        
        console.log('[ConsentManager] Consent check complete (stub)');
        setStatus('obtained');
        setCanShowPersonalizedAds(true);
        setIsReady(true);
      } catch (error) {
        console.error('[ConsentManager] Consent check failed:', error);
        setIsReady(true);
      }
    }

    checkConsent();
  }, []);

  return (
    <ConsentContext.Provider value={{ status, canShowPersonalizedAds, isReady }}>
      {children}
    </ConsentContext.Provider>
  );
}
