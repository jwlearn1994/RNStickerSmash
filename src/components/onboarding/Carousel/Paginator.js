import { View, StyleSheet, useWindowDimensions } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  Extrapolation
} from 'react-native-reanimated';

const PaginatorDot = ({ index: i, scrollX }) => {
  const { width } = useWindowDimensions();
  const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

  const dotStyle = useAnimatedStyle(() => ({
    width: interpolate(
      scrollX.value,
      inputRange,
      [10, 20, 10],
      Extrapolation.CLAMP,
    ),
    opacity: interpolate(
      scrollX.value,
      inputRange,
      [0.3, 1, 0.3],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <Animated.View
      key={i.toString()}
      style={[styles.dot, dotStyle]}
    />
  );
};

export default function Paginator({ data, scrollX }) {
  return (
    // https://docs.swmansion.com/react-native-reanimated/docs/utilities/interpolate/
    // 1. we can't use interpolate utility here, since interpolate should used in useAnimatedStyle
    // 2. we should create another Component to use useAnimatedStyle in it
    // https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animations-in-inline-styling
    <View style={styles.container}>
      {data.map((_, i) => (
        <PaginatorDot key={i.toString()} index={i} scrollX={scrollX} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    marginHorizontal: 4,
  }
});