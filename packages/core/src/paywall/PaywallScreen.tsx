import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { usePurchases } from '../iap/usePurchases';
import { PRODUCTS } from '../iap/config';

interface PaywallScreenProps {
  /**
   * Called when user closes the paywall
   */
  onClose: () => void;
  /**
   * App-specific feature list to show
   */
  features?: string[];
  /**
   * Price for remove ads (display only)
   */
  removeAdsPrice?: string;
  /**
   * Price for pro (display only)
   */
  proPrice?: string;
  /**
   * URL to privacy policy
   */
  privacyUrl: string;
  /**
   * URL to terms of service
   */
  termsUrl: string;
}

/**
 * Standard paywall screen following store guidelines
 */
export function PaywallScreen({
  onClose,
  features = ['Remove all ads', 'Unlock premium features'],
  removeAdsPrice = '$2.99',
  proPrice = '$4.99',
  privacyUrl,
  termsUrl,
}: PaywallScreenProps): JSX.Element {
  const { purchase, restore, isPurchasing, error } = usePurchases();

  const handleRemoveAds = async () => {
    const success = await purchase(PRODUCTS.REMOVE_ADS);
    if (success) onClose();
  };

  const handlePro = async () => {
    const success = await purchase(PRODUCTS.PRO);
    if (success) onClose();
  };

  const handleRestore = async () => {
    await restore();
  };

  return (
    <View style={styles.container}>
      {/* Close button - clearly visible */}
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>

      {/* Value proposition */}
      <View style={styles.content}>
        <Text style={styles.title}>Unlock Full Experience</Text>
        
        <View style={styles.features}>
          {features.map((feature, index) => (
            <Text key={index} style={styles.feature}>✓ {feature}</Text>
          ))}
        </View>

        {error && <Text style={styles.error}>{error}</Text>}

        {/* Purchase buttons */}
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton]} 
          onPress={handlePro}
          disabled={isPurchasing}
        >
          <Text style={styles.buttonTitle}>Pro</Text>
          <Text style={styles.buttonPrice}>{proPrice}</Text>
          <Text style={styles.buttonNote}>All features + No ads</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]} 
          onPress={handleRemoveAds}
          disabled={isPurchasing}
        >
          <Text style={styles.buttonTitleDark}>Remove Ads</Text>
          <Text style={styles.buttonPriceDark}>{removeAdsPrice}</Text>
        </TouchableOpacity>

        {/* Restore purchases - required by Apple */}
        <TouchableOpacity onPress={handleRestore} disabled={isPurchasing}>
          <Text style={styles.restoreText}>Restore Purchases</Text>
        </TouchableOpacity>

        {/* Legal links - required for subscriptions */}
        <View style={styles.legalLinks}>
          <TouchableOpacity onPress={() => Linking.openURL(termsUrl)}>
            <Text style={styles.legalLink}>Terms of Use</Text>
          </TouchableOpacity>
          <Text style={styles.legalSeparator}>|</Text>
          <TouchableOpacity onPress={() => Linking.openURL(privacyUrl)}>
            <Text style={styles.legalLink}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  closeText: {
    fontSize: 20,
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 24,
  },
  features: {
    marginBottom: 32,
  },
  feature: {
    fontSize: 16,
    color: '#4a4a4a',
    marginVertical: 6,
  },
  error: {
    color: '#e53935',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  buttonTitleDark: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  buttonPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
  },
  buttonPriceDark: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  buttonNote: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },
  restoreText: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 16,
  },
  legalLinks: {
    flexDirection: 'row',
    marginTop: 24,
  },
  legalLink: {
    fontSize: 12,
    color: '#888',
  },
  legalSeparator: {
    fontSize: 12,
    color: '#ccc',
    marginHorizontal: 8,
  },
});
