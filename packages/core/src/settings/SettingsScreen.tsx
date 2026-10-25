import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { useEntitlements } from '../iap/useEntitlements';
import { useTranslation } from '../i18n/I18nProvider';

interface SettingsScreenProps {
  /**
   * Called when user wants to open paywall
   */
  onOpenPaywall?: () => void;
  /**
   * Called when user wants to see privacy policy
   */
  onOpenPrivacy?: () => void;
  /**
   * Called when user wants to see terms
   */
  onOpenTerms?: () => void;
  /**
   * App version string
   */
  version?: string;
}

/**
 * Standard settings screen with theme toggle and legal links
 */
export function SettingsScreen({
  onOpenPaywall,
  onOpenPrivacy,
  onOpenTerms,
  version = '1.0.0',
}: SettingsScreenProps): JSX.Element {
  const { theme, setTheme, themePreference } = useTheme();
  const { noAds, pro } = useEntitlements();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Appearance */}
      <Text style={[styles.sectionTitle, { color: theme.colors.textMuted }]}>
        {t('settings.appearance')}
      </Text>
      <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.row}>
          <Text style={[styles.rowLabel, { color: theme.colors.text }]}>
            {t('settings.darkMode')}
          </Text>
          <Switch
            value={themePreference === 'dark'}
            onValueChange={(value) => setTheme(value ? 'dark' : 'light')}
          />
        </View>
      </View>

      {/* Premium */}
      {!pro && (
        <>
          <Text style={[styles.sectionTitle, { color: theme.colors.textMuted }]}>
            {t('settings.premium')}
          </Text>
          <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
            <TouchableOpacity style={styles.row} onPress={onOpenPaywall}>
              <Text style={[styles.rowLabel, { color: theme.colors.text }]}>
                {noAds ? t('settings.upgradeToPro') : t('settings.removeAds')}
              </Text>
              <Text style={[styles.rowChevron, { color: theme.colors.textMuted }]}>›</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {/* Legal */}
      <Text style={[styles.sectionTitle, { color: theme.colors.textMuted }]}>
        {t('settings.legal')}
      </Text>
      <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
        <TouchableOpacity style={styles.row} onPress={onOpenPrivacy}>
          <Text style={[styles.rowLabel, { color: theme.colors.text }]}>
            {t('settings.privacyPolicy')}
          </Text>
          <Text style={[styles.rowChevron, { color: theme.colors.textMuted }]}>›</Text>
        </TouchableOpacity>
        <View style={[styles.separator, { backgroundColor: theme.colors.border }]} />
        <TouchableOpacity style={styles.row} onPress={onOpenTerms}>
          <Text style={[styles.rowLabel, { color: theme.colors.text }]}>
            {t('settings.termsOfService')}
          </Text>
          <Text style={[styles.rowChevron, { color: theme.colors.textMuted }]}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Version */}
      <Text style={[styles.version, { color: theme.colors.textMuted }]}>
        v{version}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
    marginTop: 24,
    marginLeft: 16,
  },
  section: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  rowLabel: {
    fontSize: 16,
  },
  rowChevron: {
    fontSize: 22,
  },
  separator: {
    height: 1,
    marginLeft: 16,
  },
  version: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 12,
  },
});
