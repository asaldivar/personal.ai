import { Monitor, Moon, Sun } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

export function useThemeIcon() {
  const { colorScheme } = useColorScheme();

  const getThemeIcon = () => {
    switch (colorScheme) {
      case 'light':
        return <Sun size={24} color="white" />;
      case 'dark':
        return <Moon size={24} color="white" />;
      default:
        return <Monitor size={24} color="white" />;
    }
  };

  const getThemeLabel = () => {
    switch (colorScheme) {
      case 'light':
        return 'Light Mode';
      case 'dark':
        return 'Dark Mode';
      default:
        return 'System Theme';
    }
  };

  return {
    colorScheme,
    getThemeIcon,
    getThemeLabel,
  };
}
