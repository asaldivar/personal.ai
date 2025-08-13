import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-4">
        <Text className="text-3xl font-bold leading-8 text-text mb-4">
          This screen does not exist.
        </Text>
        <Link href="/" className="mt-4">
          <Text className="text-base text-primary">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
