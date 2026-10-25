import React from 'react';
import { ScrollView, Text, StyleSheet, Linking } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

interface TermsScreenProps {
  /**
   * URL to full terms (opens in browser)
   */
  termsUrl: string;
}

/**
 * In-app terms of service screen
 */
export function TermsScreen({ termsUrl }: TermsScreenProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Terms of Service
      </Text>
      
      <Text style={[styles.paragraph, { color: theme.colors.text }]}>
        By using this app, you agree to these terms.
      </Text>

      <Text style={[styles.heading, { color: theme.colors.text }]}>
        In-App Purchases
      </Text>
      <Text style={[styles.paragraph, { color: theme.colors.text }]}>
        All purchases are processed by Apple App Store or Google Play Store. 
        Refunds are handled according to store policies.
      </Text>

      <Text style={[styles.heading, { color: theme.colors.text }]}>
        Content
      </Text>
      <Text style={[styles.paragraph, { color: theme.colors.text }]}>
        All content in this app is for informational purposes only.
      </Text>

      <Text 
        style={[styles.link, { color: theme.colors.primary }]}
        onPress={() => Linking.openURL(termsUrl)}
      >
        Read Full Terms of Service
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
