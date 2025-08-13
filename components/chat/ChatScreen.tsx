import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { useChat } from '@/hooks/useChat';
import { ChatInput } from './ChatInput';
import { ChatList } from './ChatList';

export const ChatScreen: React.FC = () => {
  const { sendMessage } = useChat();

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <ChatList />
          <ChatInput onSendMessage={sendMessage} />
        </View>
      </SafeAreaView>
    </View>
  );
};
