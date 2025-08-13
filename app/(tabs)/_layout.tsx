import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Platform } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? '#FFFFFF' : '#000000', // White/Black
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#9CA3AF' : '#6B7280', // Subtle gray
        headerShown: false,
        tabBarBackground: TabBarBackground,
        tabBarHideOnKeyboard: true, // Hide tab bar when keyboard is open
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            height: 60, // Reduced height
            paddingBottom: 10, // Reduced padding
            bottom: 0,
          },
          android: {
            height: 60, // Reduced height
            paddingBottom: 5, // Reduced padding
          },
          default: {
            height: 60, // Reduced height
            paddingBottom: 5, // Reduced padding
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="message.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
