import { useCallback, useRef } from 'react';
import { Platform, Linking, Alert } from 'react-native';

// TODO: Import from expo-store-review when installed
// import * as StoreReview from 'expo-store-review';

interface UseRatePromptOptions {
  /**
   * App Store ID (for iOS fallback)
   */
  appStoreId?: string;
  /**
   * Package name (for Android fallback)
   */
  packageName?: string;
  /**
   * Minimum number of app opens before showing prompt
   */
  minOpens?: number;
  /**
   * Minimum days since install before showing prompt
   */
  minDays?: number;
}

/**
 * Hook for prompting users to rate the app
 * Uses native in-app review when available
 */
export function useRatePrompt({
  appStoreId,
  packageName,
  minOpens = 5,
  minDays = 3,
}: UseRatePromptOptions = {}) {
  const promptedRef = useRef(false);

  const prompt = useCallback(async () => {
    if (promptedRef.current) {
      return;
    }

    // TODO: Check conditions (opens, days) from storage

    try {
      // TODO: Use StoreReview.requestReview() when package installed
      // const isAvailable = await StoreReview.isAvailableAsync();
      // if (isAvailable) {
      //   await StoreReview.requestReview();
      //   promptedRef.current = true;
      //   return;
      // }

      // Fallback to store link
      const url = Platform.select({
        ios: appStoreId 
          ? `itms-apps://itunes.apple.com/app/id${appStoreId}?action=write-review`
          : null,
        android: packageName
          ? `market://details?id=${packageName}`
          : null,
      });

      if (url) {
        const canOpen = await Linking.canOpenURL(url);
        if (canOpen) {
          await Linking.openURL(url);
          promptedRef.current = true;
        }
      }
    } catch (error) {
      console.warn('[useRatePrompt] Failed to show review prompt:', error);
    }
  }, [appStoreId, packageName]);

  const askLater = useCallback(() => {
    Alert.alert(
      'Enjoying the app?',
      'Would you mind rating us on the store? It really helps!',
      [
        { text: 'Not Now', style: 'cancel' },
        { text: 'Rate Now', onPress: prompt },
      ]
    );
  }, [prompt]);

  return {
    prompt,
    askLater,
  };
}
