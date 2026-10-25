import { useCallback, useRef, useState } from 'react';
import { useAds } from './AdsProvider';

// TODO: Import from react-native-google-mobile-ads when installed
// import { RewardedAd, AdEventType, RewardedAdEventType } from 'react-native-google-mobile-ads';

interface UseRewardedOptions {
  /**
   * Ad unit ID (use test ID in development)
   */
  unitId: string;
  /**
   * Called when user earns reward
   */
  onReward?: (reward: { type: string; amount: number }) => void;
}

interface UseRewardedReturn {
  /**
   * Whether an ad is ready to show
   */
  isReady: boolean;
  /**
   * Whether an ad is currently showing
   */
  isShowing: boolean;
  /**
   * Show the rewarded ad if ready
   * Returns true if ad was shown, false otherwise
   */
  show: () => Promise<boolean>;
  /**
   * Preload the next rewarded ad
   */
  load: () => void;
}

/**
 * Hook for managing rewarded ads
 * User must explicitly choose to watch - never forced
 */
export function useRewarded({
  unitId,
  onReward,
}: UseRewardedOptions): UseRewardedReturn {
  const { adsEnabled } = useAds();
  const [isReady, setIsReady] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const adRef = useRef<unknown>(null);

  const load = useCallback(() => {
    if (!adsEnabled) return;

    // TODO: Implement when package installed
    // const rewarded = RewardedAd.createForAdRequest(unitId);
    // rewarded.addAdEventListener(AdEventType.LOADED, () => {
    //   setIsReady(true);
    //   adRef.current = rewarded;
    // });
    // rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward) => {
    //   onReward?.(reward);
    // });
    // rewarded.load();
    console.log('[useRewarded] Loading rewarded ad (stub)');
  }, [unitId, adsEnabled, onReward]);

  const show = useCallback(async (): Promise<boolean> => {
    if (!isReady || !adRef.current) {
      console.log('[useRewarded] Ad not ready, skipping');
      return false;
    }

    setIsShowing(true);
    
    // TODO: Show the ad when package installed
    // await (adRef.current as RewardedAd).show();
    console.log('[useRewarded] Showing rewarded ad (stub)');
    
    // Simulate reward for testing
    onReward?.({ type: 'coins', amount: 100 });
    
    setIsShowing(false);
    setIsReady(false);
    
    // Preload next ad
    load();
    
    return true;
  }, [isReady, onReward, load]);

  return {
    isReady,
    isShowing,
    show,
    load,
  };
}
