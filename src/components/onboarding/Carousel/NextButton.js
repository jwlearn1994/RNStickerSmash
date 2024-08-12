import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming
} from 'react-native-reanimated';
import Svg, { G, Circle } from 'react-native-svg';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect } from 'react';

// create Custom Animated object from 3rd-party component
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function NextButton({ percentage = 25, onPress }) {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = useSharedValue(percentage);

  useEffect(() => {
    progress.value = percentage;
  }, [percentage]);

  // useAnimatedProps is useful for animating 3rd-party components props
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: withTiming(
      circumference - (circumference * progress.value) / 100
    )
  }));

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={`${center}, ${center}`}>
          <Circle fill="transparent" stroke="#E6E7E8" strokeWidth={strokeWidth} cx={center} cy={center} r={radius} />
          <AnimatedCircle
            fill="transparent"
            stroke="#F4338F"
            strokeWidth={strokeWidth}
            cx={center}
            cy={center}
            r={radius}
            strokeDasharray={circumference}
            // strokeDashoffset={circumference - (circumference * progress.value) / 100}
            animatedProps={animatedProps}
          />
        </G>
      </Svg>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={onPress}
      >
        <MaterialIcons name="keyboard-arrow-right" size={38} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#f4338f',
    borderRadius: 100,
    padding: 20,
  }
});