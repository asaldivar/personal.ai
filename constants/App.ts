import Constants from 'expo-constants';

export const AppConfig = {
  // App version and build info
  version: Constants.expoConfig?.version || '1.0.0',
  buildNumber:
    Constants.expoConfig?.ios?.buildNumber ||
    Constants.expoConfig?.android?.versionCode ||
    '1',

  // App name
  name: Constants.expoConfig?.name || 'Chat',

  // Platform info
  platform: Constants.platform,

  // Environment detection
  isDevelopment: __DEV__,
  isProduction: !__DEV__,

  // API configuration (you can add your API endpoints here)
  api: {
    baseUrl:
      Constants.expoConfig?.extra?.apiBaseUrl || 'https://api.example.com',
    timeout: 10000,
  },

  // Feature flags
  features: {
    chat: true,
    haptics: true,
    splashScreen: true,
  },
} as const;

// Helper function to get environment-specific values
export const getEnvValue = <T>(devValue: T, prodValue: T): T => {
  return AppConfig.isDevelopment ? devValue : prodValue;
};
