import { PaywallScreen } from '@factory/core';
import { router } from 'expo-router';

export default function Paywall() {
  return (
    <PaywallScreen
      onClose={() => router.back()}
      features={[
        'Remove all advertisements',
        'Support indie development',
        'Unlock future premium features',
      ]}
      removeAdsPrice="$2.99"
      proPrice="$4.99"
      privacyUrl="https://a3503.github.io/app-factory/privacy"
      termsUrl="https://a3503.github.io/app-factory/terms"
    />
  );
}
