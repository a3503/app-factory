import { useCallback, useRef } from 'react';
import { useAds } from './AdsProvider';

// TODO: Import from react-native-google-mobile-ads when installed
// import { InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';

interface UseInterstitialOptions {
  /**
   * Ad unit ID (use test ID in development)
   */
  unitId: string;
  /**
   * Minimum interval between interstitials in milliseconds
   * Default: 4 minutes (240000ms)
   */
  minInterval?: number;
}

interface UseInterstitialReturn {
  /**
   * Whether an ad is ready to show
   */
  isReady: boolean;
  /**
   * Show the interstitial if ready and interval has passed
   * Returns true if ad was shown, false otherwise
   */
  show: () => Promise<boolean>;
  /**
   * Preload the next interstitial
   */
  load: () => void;
}

const DEFAULT_MIN_INTERVAL = 4 * 60 * 1000; // 4 minutes

/**
 * Hook for managing interstitial ads
 * Respects frequency caps and entitlements
 */
export function useInterstitial({
  unitId,
  minInterval = DEFAULT_MIN_INTERVAL,
}: UseInterstitialOptions): UseInterstitialReturn {
  const { adsEnabled } = useAds();
  const lastShownRef = useRef<number>(0);
  const isReadyRef = useRef<boolean>(false);

  const load = useCallback(() => {
    if (!adsEnabled) return;

    // TODO: Implement when package installed
    // const interstitial = InterstitialAd.createForAdRequest(unitId);
    // interstitial.addAdEventListener(AdEventType.LOADED, () => {
    //   isReadyRef.current = true;
    // });
    // interstitial.load();
    console.log('[useInterstitial] Loading interstitial (stub)');
  }, [unitId, adsEnabled]);

  const show = useCallback(async (): Promise<boolean> => {
    // Check if ads are enabled (user might have purchased no-ads)
    if (!adsEnabled) {
      console.log('[useInterstitial] Ads disabled, skipping');
      return false;
    }

    // Check frequency cap
    const now = Date.now();
    if (now - lastShownRef.current < minInterval) {
      console.log('[useInterstitial] Too soon since last ad, skipping');
      return false;
    }

    // Check if ad is ready
    if (!isReadyRef.current) {
      console.log('[useInterstitial] Ad not ready, skipping');
      return false;
    }

    // TODO: Show the ad when package installed
    // await interstitial.show();
    console.log('[useInterstitial] Showing interstitial (stub)');
    
    lastShownRef.current = now;
    isReadyRef.current = false;
    
    // Preload next ad
    load();
    
    return true;
  }, [adsEnabled, minInterval, load]);

  return {
    isReady: isReadyRef.current,
    show,
    load,
  };
}
