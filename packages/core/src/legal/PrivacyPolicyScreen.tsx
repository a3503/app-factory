import React from 'react';
import { ScrollView, Text, StyleSheet, Linking } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

interface PrivacyPolicyScreenProps {
  /**
   * URL to full privacy policy (opens in browser)
   */
  policyUrl: string;
}

/**
 * In-app privacy policy screen
 * Shows a summary and links to full policy
 */
export function PrivacyPolicyScreen({ policyUrl }: PrivacyPolicyScreenProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Privacy Policy
      </Text>
      
      <Text style={[styles.paragraph, { color: theme.colors.text }]}>
        Your privacy is important to us. This app collects minimal data necessary for functionality.
      </Text>

      <Text style={[styles.heading, { color: theme.colors.text }]}>
        Data We Collect
      </Text>
      <Text style={[styles.paragraph, { color: theme.colors.text }]}>
        • Advertising ID (for personalized ads, with consent){'
'}
        • Anonymous analytics (crash reports, if enabled){'
'}
        • Purchase history (handled by app stores)
      </Text>

      <Text style={[styles.heading, { color: theme.colors.text }]}>
        Third-Party Services
      </Text>
      <Text style={[styles.paragraph, { color: theme.colors.text }]}>
        • Google AdMob (advertising){'
'}
        • RevenueCat (in-app purchases)
      </Text>

      <Text 
        style={[styles.link, { color: theme.colors.primary }]}
        onPress={() => Linking.openURL(policyUrl)}
      >
        Read Full Privacy Policy
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
  },
  link: {
    fontSize: 16,
    marginTop: 30,
    textDecorationLine: 'underline',
  },
});
