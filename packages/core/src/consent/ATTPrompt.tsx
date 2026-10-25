import React, { useEffect, useState, PropsWithChildren } from 'react';
import { Platform } from 'react-native';

// TODO: Import from expo-tracking-transparency when installed
// import { requestTrackingPermissionsAsync, getTrackingPermissionsAsync } from 'expo-tracking-transparency';

interface ATTPromptProps extends PropsWithChildren {
  /**
   * Called after ATT prompt is handled (or skipped on Android)
   */
  onComplete?: (granted: boolean) => void;
}

/**
 * Shows ATT prompt on iOS 14.5+
 * Should be shown after UMP consent dialog
 */
export function ATTPrompt({ children, onComplete }: ATTPromptProps): JSX.Element {
  const [isReady, setIsReady] = useState(Platform.OS !== 'ios');

  useEffect(() => {
    if (Platform.OS !== 'ios') {
      onComplete?.(false);
      return;
    }

    async function requestATT() {
      try {
        // TODO: Implement when package installed
        // const { status } = await requestTrackingPermissionsAsync();
        // const granted = status === 'granted';
        
        console.log('[ATTPrompt] ATT request complete (stub)');
        const granted = false;
        
        setIsReady(true);
        onComplete?.(granted);
      } catch (error) {
        console.error('[ATTPrompt] ATT request failed:', error);
        setIsReady(true);
        onComplete?.(false);
      }
    }

    requestATT();
  }, [onComplete]);

  if (!isReady) {
    return <></>;
  }

  return <>{children}</>;
}
