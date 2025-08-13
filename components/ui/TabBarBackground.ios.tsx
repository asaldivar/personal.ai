import { useColorScheme } from 'nativewind';
import { View } from 'react-native';

export default function BlurTabBarBackground() {
  const { colorScheme } = useColorScheme();

  const backgroundColor =
    colorScheme === 'dark'
      ? 'rgba(21, 23, 24, 0.8)' // Dark theme with transparency
      : 'rgba(255, 255, 255, 0.8)'; // Light theme with transparency

  return (
    <View
      // Fallback to a semi-transparent background since expo-blur was removed
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor,
      }}
    />
  );
}

export function useBottomTabOverflow() {
  // Return a default value since useBottomTabBarHeight was removed
  return 0;
}
