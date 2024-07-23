import { useEffect } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

const useGlowStyle = (isSelected: boolean) => {
  const glowValue = useSharedValue(0);

  useEffect(() => {
    if (isSelected) {
      glowValue.value = withRepeat(
        withTiming(10, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
        -1,
        true,
      );
    } else {
      glowValue.value = withTiming(0, {
        duration: 500,
        easing: Easing.out(Easing.ease),
      });
    }
  }, [isSelected, glowValue]);

  return useAnimatedStyle(() => ({
    shadowRadius: glowValue.value,
    shadowColor: "rgba(0, 150, 255, 1)",
    shadowOpacity: isSelected ? 1 : 0,
    elevation: isSelected ? 10 : 0,
  }));
};

export default useGlowStyle;
