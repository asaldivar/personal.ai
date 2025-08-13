import { useColorScheme } from 'nativewind';
import React from 'react';
import { View } from 'react-native';

import { themes } from '@/lib/themes';

interface ThemeProps {
  children: React.ReactNode;
}

export function Theme({ children }: ThemeProps) {
  const { colorScheme } = useColorScheme();

  // Get the appropriate theme based on color scheme
  const theme = colorScheme === 'dark' ? themes.dark : themes.light;

  return (
    <View style={theme} className="flex-1">
      {children}
    </View>
  );
}
