import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface PaywallButtonProps {
  /**
   * Button label
   */
  label: string;
  /**
   * Called when button is pressed
   */
  onPress: () => void;
  /**
   * Button style variant
   */
  variant?: 'primary' | 'secondary';
  /**
   * Custom container style
   */
  style?: ViewStyle;
  /**
   * Custom text style
   */
  textStyle?: TextStyle;
}

/**
 * Reusable button for paywall CTAs
 */
export function PaywallButton({
  label,
  onPress,
  variant = 'primary',
  style,
  textStyle,
}: PaywallButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' ? styles.primary : styles.secondary,
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          variant === 'primary' ? styles.textPrimary : styles.textSecondary,
          textStyle,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#007AFF',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textPrimary: {
    color: '#ffffff',
  },
  textSecondary: {
    color: '#007AFF',
  },
});
