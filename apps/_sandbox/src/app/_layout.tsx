import { Stack } from 'expo-router';
import { 
  ThemeProvider, 
  ConsentManager, 
  AdsProvider, 
  PurchaseProvider,
  I18nProvider,
  useEntitlements,
} from '@factory/core';

const translations = {
  en: {
    'settings.appearance': 'Appearance',
    'settings.darkMode': 'Dark Mode',
    'settings.premium': 'Premium',
    'settings.removeAds': 'Remove Ads',
    'settings.upgradeToPro': 'Upgrade to Pro',
    'settings.legal': 'Legal',
    'settings.privacyPolicy': 'Privacy Policy',
    'settings.termsOfService': 'Terms of Service',
  },
  fr: {
    'settings.appearance': 'Apparence',
    'settings.darkMode': 'Mode sombre',
    'settings.premium': 'Premium',
    'settings.removeAds': 'Supprimer les pubs',
    'settings.upgradeToPro': 'Passer à Pro',
    'settings.legal': 'Mentions légales',
    'settings.privacyPolicy': 'Politique de confidentialité',
    'settings.termsOfService': "Conditions d'utilisation",
  },
};

function AppContent() {
  const { noAds } = useEntitlements();

  return (
    <AdsProvider enabled={!noAds}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Sandbox' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
        <Stack.Screen name="paywall" options={{ presentation: 'modal', headerShown: false }} />
      </Stack>
    </AdsProvider>
  );
}

export default function RootLayout() {
  return (
    <I18nProvider translations={translations}>
      <ThemeProvider>
        <ConsentManager>
          <PurchaseProvider apiKey="sandbox_key">
            <AppContent />
          </PurchaseProvider>
        </ConsentManager>
      </ThemeProvider>
    </I18nProvider>
  );
}
