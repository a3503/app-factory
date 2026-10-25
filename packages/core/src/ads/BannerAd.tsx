import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useAds } from './AdsProvider';

// TODO: Import from react-native-google-mobile-ads when installed
// import { BannerAd as GADBannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

interface BannerAdProps {
  /**
   * Ad unit ID (use test ID in development)
   */
  unitId: string;
  /**
   * Size of the banner
   */
  size?: 'BANNER' | 'LARGE_BANNER' | 'MEDIUM_RECTANGLE' | 'ADAPTIVE';
  /**
   * Called when ad fails to load
   */
  onError?: (error: Error) => void;
}

/**
 * Banner ad component
 * Automatically hidden when user has no-ads entitlement
 */
export function BannerAd({ unitId, size = 'ADAPTIVE', onError }: BannerAdProps): JSX.Element | null {
  const { initialized, adsEnabled } = useAds();

  if (!initialized || !adsEnabled) {
    return null;
  }

  // TODO: Replace with actual implementation when package installed
  return (
    <View style={styles.placeholder}>
      {/* 
      <GADBannerAd
        unitId={unitId}
        size={size === 'ADAPTIVE' ? BannerAdSize.ANCHORED_ADAPTIVE_BANNER : BannerAdSize[size]}
        onAdFailedToLoad={(error) => {
          console.warn('[BannerAd] Failed to load:', error);
          onError?.(error);
        }}
      />
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    height: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
