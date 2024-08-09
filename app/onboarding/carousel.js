import { SafeAreaView, StyleSheet } from 'react-native';
import {
  useSharedValue,
  useAnimatedScrollHandler
} from 'react-native-reanimated';

import Carousel from 'components/onboarding/Carousel';
import CarouselItem from 'components/onboarding/CarouselItem';
import slides from 'components/onboarding/slides';

export default function AnimatedCarousel() {
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(
    {
      onEndDrag: (event) => {
        const { targetContentOffset } = event;
        scrollX.value = targetContentOffset.x;
        console.log(scrollX.value);
      },
    },
  );

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        slides={slides}
        renderSlide={({ item }) => <CarouselItem item={item} />}
        onScroll={scrollHandler}
        onChange={(index) => console.log(index)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
