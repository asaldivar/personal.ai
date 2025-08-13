import * as Linking from 'expo-linking';

export const LinkingConfig = {
  prefixes: [Linking.createURL('/')],

  config: {
    screens: {
      '(tabs)': {
        screens: {
          index: 'home',
          chat: 'chat',
        },
      },
    },
  },
};

// Helper function to open external URLs
export const openExternalURL = async (url: string): Promise<void> => {
  try {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.warn(`Cannot open URL: ${url}`);
    }
  } catch (error) {
    console.error('Error opening URL:', error);
  }
};

// Helper function to open app settings
export const openAppSettings = async (): Promise<void> => {
  try {
    await Linking.openSettings();
  } catch (error) {
    console.error('Error opening app settings:', error);
  }
};

// Helper function to get initial URL (for deep linking)
export const getInitialURL = async (): Promise<string | null> => {
  try {
    return await Linking.getInitialURL();
  } catch (error) {
    console.error('Error getting initial URL:', error);
    return null;
  }
};

// Helper function to add URL change listener
export const addURLListener = (callback: (url: string) => void) => {
  return Linking.addEventListener('url', ({ url }) => callback(url));
};
