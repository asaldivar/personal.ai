import React from 'react';
import { Text, View } from 'react-native';

import { ChatMessage as ChatMessageType } from '@/types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <View
      className={`my-2 max-w-[80%] ${
        isUser ? 'self-end items-end' : 'self-start items-start'
      }`}
    >
      <View
        className={`px-4 py-3 rounded-[20px] mb-1 ${
          isUser
            ? 'bg-primary'
            : 'bg-surface-secondary border border-primary/20'
        }`}
      >
        <Text
          className={`text-base leading-5 ${
            isUser ? 'text-white' : 'text-text'
          }`}
        >
          {message.text}
        </Text>
      </View>

      {message.options && (
        <View className="mt-2 gap-2">
          {message.options.map((option, index) => (
            <View
              key={index}
              className="bg-surface-secondary px-4 py-2.5 rounded-2xl border border-primary/30"
            >
              <Text className="text-sm text-primary text-center">{option}</Text>
            </View>
          ))}
        </View>
      )}

      {message.selectedOptions && (
        <View className="mt-2 p-3 bg-primary/10 rounded-xl border border-primary/30">
          <Text className="text-xs font-semibold text-primary mb-1">
            Selected:
          </Text>
          {message.selectedOptions.map((option, index) => (
            <Text key={index} className="text-xs text-primary ml-2">
              • {option}
            </Text>
          ))}
        </View>
      )}

      <Text
        className={`text-xs mt-1 ${
          isUser
            ? 'text-text-secondary text-right'
            : 'text-text-secondary text-left'
        }`}
      >
        {message.timestamp.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
    </View>
  );
};
