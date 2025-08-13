import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ChatList } from './ChatList';

export const ChatScreen: React.FC = () => {
  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1">
        <ChatList />
      </SafeAreaView>
    </View>
  );
};
