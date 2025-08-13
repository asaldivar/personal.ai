import { Image } from 'expo-image';
import { useColorScheme } from 'nativewind';
import { Pressable, Text, View } from 'react-native';

import { useThemeIcon } from '@/hooks/useThemeIcon';

export default function HomeScreen() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { getThemeIcon } = useThemeIcon();

  const toggleTheme = () => {
    if (colorScheme === 'light') {
      setColorScheme('dark');
    } else if (colorScheme === 'dark') {
      setColorScheme('system');
    } else {
      setColorScheme('light');
    }
  };

  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Image
        source={require('@/assets/images/personal-ai.png')}
        className="w-48 h-12"
        contentFit="contain"
      />

      <Text className="text-center text-lg text-text">
        Your specially crafted AI team
      </Text>

      {/* Theme Toggle */}
      <Pressable
        onPress={toggleTheme}
        className="px-6 py-3 rounded-full bg-primary active:bg-accent"
      >
        {getThemeIcon()}
      </Pressable>
    </View>
  );
}
