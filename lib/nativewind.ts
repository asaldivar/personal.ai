import { Image } from 'expo-image';
import { cssInterop } from 'nativewind';

// Register expo-image with NativeWind
// This enables Tailwind classes to work with expo-image components
cssInterop(Image, { className: 'style' });

// Add other component registrations here as needed
// cssInterop(OtherComponent, { className: 'style' });

export {};
