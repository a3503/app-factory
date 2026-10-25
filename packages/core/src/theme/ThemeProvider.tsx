import React, { createContext, useContext, useState, PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import type { Theme, ThemeColors } from './types';

const lightColors: ThemeColors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#FFFFFF',
  surface: '#F5F5F5',
  text: '#1A1A1A',
  textMuted: '#8E8E93',
  accent: '#34C759',
  error: '#FF3B30',
  success: '#34C759',
  border: '#E5E5EA',
};

const darkColors: ThemeColors = {
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  background: '#000000',
  surface: '#1C1C1E',
  text: '#FFFFFF',
  textMuted: '#8E8E93',
  accent: '#30D158',
  error: '#FF453A',
  success: '#30D158',
  border: '#38383A',
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

const borderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  full: 9999,
};

function createTheme(name: 'light' | 'dark'): Theme {
  return {
    name,
    colors: name === 'light' ? lightColors : darkColors,
    spacing,
    borderRadius,
  };
}

interface ThemeContextValue {
  theme: Theme;
  setTheme: (name: 'light' | 'dark' | 'system') => void;
  themePreference: 'light' | 'dark' | 'system';
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: createTheme('light'),
  setTheme: () => {},
  themePreference: 'system',
});

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}

interface ThemeProviderProps extends PropsWithChildren {
  /**
   * Initial theme preference
   */
  initialTheme?: 'light' | 'dark' | 'system';
  /**
   * Custom color overrides for light theme
   */
  lightOverrides?: Partial<ThemeColors>;
  /**
   * Custom color overrides for dark theme
   */
  darkOverrides?: Partial<ThemeColors>;
}

/**
 * Provider for app theming with light/dark mode support
 */
export function ThemeProvider({
  children,
  initialTheme = 'system',
  lightOverrides,
  darkOverrides,
}: ThemeProviderProps): JSX.Element {
  const systemColorScheme = useColorScheme();
  const [themePreference, setThemePreference] = useState<'light' | 'dark' | 'system'>(initialTheme);

  const effectiveTheme = themePreference === 'system' 
    ? (systemColorScheme || 'light') 
    : themePreference;

  const theme = createTheme(effectiveTheme);
  
  // Apply overrides
  if (effectiveTheme === 'light' && lightOverrides) {
    theme.colors = { ...theme.colors, ...lightOverrides };
  }
  if (effectiveTheme === 'dark' && darkOverrides) {
    theme.colors = { ...theme.colors, ...darkOverrides };
  }

  const setTheme = (name: 'light' | 'dark' | 'system') => {
    setThemePreference(name);
    // TODO: Persist to storage
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themePreference }}>
      {children}
    </ThemeContext.Provider>
  );
}
