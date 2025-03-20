import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { Button, View, XStack } from "tamagui";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");

export default function animation() {
  const width = useSharedValue(100);

  const growSpring = () => {
    if (width.value <= window.width) {
      width.value = withSpring(width.value + 50);
    }
  };
  const shrinkSpring = () => {
    if (width.value > 0) {
      width.value = withSpring(width.value - 50);
    }
  };

  return (
    <View flex={1} alignItems="center">
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: "violet",
        }}
      />
      <XStack marginBlockStart={10} gap={5}>
        <Button borderColor={"black"} onPress={growSpring}>
          Grow X
        </Button>
        <Button borderColor={"black"} onPress={shrinkSpring}>
          Shrink X
        </Button>
      </XStack>
    </View>
  );
}
