# OTA (Over-The-Air) Updates Setup Guide

This guide follows the [official Expo documentation](https://docs.expo.dev/deploy/send-over-the-air-updates/#get-started) for setting up OTA updates using EAS (Expo Application Services).

## What's Already Configured

✅ **expo-updates** package installed
✅ **Simple update utility** created following current best practices
✅ **Automatic update checking** on app start
✅ **EAS configuration** file created
✅ **App configuration** for updates

## Next Steps to Complete OTA Setup

### 1. Create an EAS Account

```bash
# Install EAS CLI globally
npm install -g @expo/eas-cli

# Login to your Expo account
eas login
```

### 2. Initialize EAS Project

```bash
# Initialize EAS in your project
eas build:configure
```

### 3. Configure Updates (Simplified)

The `eas update:configure` command will automatically update your `app.json` with the correct configuration. Your current configuration is already simplified and follows the current best practices.

Your `eas.json` is already configured with the simplified settings recommended by Expo.

### 4. Build Your App

```bash
# Build for development
eas build --profile development --platform ios
eas build --profile development --platform android

# Build for production
eas build --profile production --platform ios
eas build --profile production --platform android
```

### 5. Publish Updates

```bash
# Publish an update
eas update --branch production --message "Bug fixes and improvements"

# Publish to specific platform
eas update --branch production --platform ios --message "iOS specific update"
```

## How OTA Updates Work

### Automatic Updates

- Updates are checked automatically when the app starts
- Updates are downloaded in the background
- Users are prompted to restart the app when updates are ready

### Update Flow

1. **App Start**: `initializeUpdates()` runs automatically
2. **Check for Updates**: Queries EAS servers for available updates
3. **Download**: If updates exist, they're downloaded in background
4. **Notify User**: Alert shows when update is ready
5. **Apply Update**: User can restart immediately or later

### Update Utility Methods

```typescript
// Check for available updates
const hasUpdate = await checkForUpdates();

// Reload app to apply updates
await reloadApp();

// Initialize updates (called automatically on app start)
initializeUpdates();
```

## Best Practices

### Update Frequency

- **Development**: Update as often as needed
- **Production**: Limit to critical bug fixes and small improvements
- **Major Changes**: Use app store updates for significant changes

### Update Size

- Keep updates under 50MB for best user experience
- Use asset optimization techniques
- Consider incremental updates

### Testing

- Test updates in development builds first
- Use preview builds for testing before production
- Test on both iOS and Android

## Troubleshooting

### Common Issues

1. **Updates not downloading**
   - Check internet connection
   - Verify EAS project configuration
   - Check app.json update settings

2. **Update fails to apply**
   - Ensure app has proper permissions
   - Check device storage space
   - Verify update compatibility

3. **Build errors**
   - Check EAS CLI version
   - Verify project configuration
   - Check Expo SDK compatibility

### Debug Information

```typescript
// Check if running from development build
console.log('Is Dev Build:', __DEV__);

// Check if updates are enabled
console.log('Updates Enabled:', Updates.isEnabled);
```

## Security Considerations

- Updates are signed by EAS
- Only updates from your project can be applied
- Updates are verified before installation
- Consider implementing update approval workflows for enterprise apps

## Cost and Limits

- **EAS Build**: Free tier available, paid plans for more builds
- **EAS Update**: Free tier available, paid plans for more updates
- **Bandwidth**: Updates count toward your EAS usage

## Support

- [EAS Documentation](https://docs.expo.dev/eas/)
- [Expo Updates Documentation](https://docs.expo.dev/versions/latest/sdk/updates/)
- [EAS Community](https://forums.expo.dev/)

---

Your app is now configured for OTA updates! The UpdateManager will automatically check for updates when the app starts, and users will be notified when updates are available.
