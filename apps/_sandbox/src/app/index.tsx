import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { BannerAd, useTheme, useEntitlements, AD_TEST_IDS } from '@factory/core';

export default function HomeScreen() {
  const { theme } = useTheme();
  const { noAds, pro } = useEntitlements();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        🧪 Sandbox App
      </Text>
      
      <Text style={[styles.subtitle, { color: theme.colors.textMuted }]}>
        Testing @factory/core modules
      </Text>

      <View style={styles.status}>
        <Text style={[styles.statusLabel, { color: theme.colors.text }]}>
          Status:
        </Text>
        <Text style={[styles.statusValue, { color: theme.colors.primary }]}>
          {pro ? '✨ Pro' : noAds ? '🚫 No Ads' : '📺 Free (with ads)'}
        </Text>
      </View>

      <View style={styles.buttons}>
        <Link href="/settings" asChild>
          <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.surface }]}>
            <Text style={[styles.buttonText, { color: theme.colors.text }]}>
              ⚙️ Settings
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/paywall" asChild>
          <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}>
            <Text style={[styles.buttonText, { color: '#fff' }]}>
              💎 Open Paywall
            </Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Banner ad at bottom - only shows if ads enabled */}
      <View style={styles.adContainer}>
        <BannerAd unitId={AD_TEST_IDS.BANNER.android} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  statusLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  statusValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttons: {
    width: '100%',
    gap: 12,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  adContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
