import { ArrowUp } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  disabled = false,
}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const isSendDisabled = !message.trim() || disabled;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="bg-gray-50 border-t border-gray-200"
    >
      <View className="flex-row items-center px-4 py- gap-3 pb-10">
        <View className="flex-1 bg-white rounded-2xl px-4 py-3 border border-gray-200 shadow-xs">
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
            placeholderTextColor="#9CA3AF"
            className="text-base text-text-primary"
            multiline
            maxLength={1000}
            editable={!disabled}
            onSubmitEditing={handleSend}
            returnKeyType="send"
          />
        </View>
        <TouchableOpacity
          onPress={handleSend}
          disabled={isSendDisabled}
          className={`w-12 h-12 rounded-full items-center justify-center ${
            isSendDisabled ? 'bg-gray-300' : 'bg-primary'
          } shadow-xs`}
        >
          <ArrowUp size={20} color={isSendDisabled ? '#9CA3AF' : '#FFFFFF'} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
