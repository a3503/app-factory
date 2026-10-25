import { SettingsScreen } from '@factory/core';
import { router } from 'expo-router';

export default function Settings() {
  return (
    <SettingsScreen
      onOpenPaywall={() => router.push('/paywall')}
      onOpenPrivacy={() => {
        // TODO: Navigate to privacy policy
        console.log('Open privacy policy');
      }}
      onOpenTerms={() => {
        // TODO: Navigate to terms
        console.log('Open terms');
      }}
      version="0.0.1"
    />
  );
}
