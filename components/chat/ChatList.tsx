import React, { useRef } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { useChat } from '@/hooks/useChat';
import { ChatMessage as ChatMessageType } from '@/types/chat';
import { ChatMessage } from './ChatMessage';

export const ChatList: React.FC = () => {
  const {
    messages,
    hasMore,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    loadOlderMessages,
  } = useChat();

  const listRef = useRef<FlatList<ChatMessageType>>(null);

  const handleLoadOlderMessages = () => {
    if (hasMore && !isFetchingNextPage) {
      loadOlderMessages();
    }
  };

  const renderMessage = ({ item }: { item: ChatMessageType }) => (
    <ChatMessage message={item} />
  );

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;

    return (
      <View className="flex-row justify-center items-center py-4 gap-2">
        <ActivityIndicator size="small" className="text-primary" />
        <Text className="text-sm text-text-secondary">
          Loading older messages...
        </Text>
      </View>
    );
  };

  const renderEmpty = () => {
    if (isLoading) {
      return (
        <View className="flex-1 justify-center items-center py-10">
          <ActivityIndicator size="large" className="text-primary" />
        </View>
      );
    }

    if (isError) {
      return (
        <View className="flex-1 justify-center items-center py-10">
          <Text className="text-base text-red-500 mt-4">
            Error loading chat
          </Text>
          <Text className="text-sm text-text-secondary mt-2 text-center">
            {error?.message}
          </Text>
        </View>
      );
    }

    return (
      <View className="flex-1 justify-center items-center py-10">
        <Text className="text-base text-text-secondary mt-4">
          No messages yet
        </Text>
      </View>
    );
  };

  return (
    <View className="flex-1 px-4 py-2">
      <FlatList
        ref={listRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        className="flex-1"
        inverted={true}
        onEndReached={handleLoadOlderMessages}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
        maintainVisibleContentPosition={{
          minIndexForVisible: 0,
          autoscrollToTopThreshold: 10,
        }}
      />
    </View>
  );
};
