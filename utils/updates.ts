import * as Updates from 'expo-updates';

/**
 * Simple OTA update utility following Expo's current best practices
 * Based on: https://docs.expo.dev/deploy/send-over-the-air-updates/#get-started
 */

export const checkForUpdates = async () => {
  try {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      // The update will be applied on the next app restart
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error checking for updates:', error);
    return false;
  }
};

export const reloadApp = async () => {
  try {
    await Updates.reloadAsync();
  } catch (error) {
    console.error('Error reloading app:', error);
  }
};

// Simple initialization - just check for updates on app start
export const initializeUpdates = async () => {
  if (!__DEV__) {
    await checkForUpdates();
  }
};
