import { View } from 'tamagui';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View>
        <Link href="/">
          Go back to Home screen!
        </Link>
      </View>
    </View>
  );
}

