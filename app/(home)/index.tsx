import { Link } from 'expo-router';
import { Button, Text, View } from 'tamagui'

export default function Index() {
  return (
    <View
    flex={1}
    justifyContent="center"
    alignItems="center"
    bg="lightgray"
    gap={10}
    >
      <Link  asChild href='/(home)/datePickPage'><Button>Date Picker Example</Button></Link>
      <Link  asChild href='/(home)/search'><Button>Search Input Example</Button></Link>
      <Link  asChild href='/(home)/animation'><Button>Animation Example</Button></Link>
    </View>
  );
}
