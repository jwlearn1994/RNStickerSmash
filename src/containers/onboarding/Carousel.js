import { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  useSharedValue,
  useAnimatedScrollHandler
} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Carousel from 'components/onboarding/Carousel';
import slides from 'components/onboarding/Carousel/slides';
import { VIEWED_ONBOARDING } from 'lib/async-storage';

export default function OnboardingCarousel({ onComplete }) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useSharedValue(0);

  // https://docs.swmansion.com/react-native-reanimated/docs/2.x/api/hooks/useAnimatedScrollHandler
  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: (event) => {
        scrollX.value = event.contentOffset.x;
      },
    },
  );

  const pressNextHandler = async () => {
    if (currentIndex < slides.length - 1) {
      carouselRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem(VIEWED_ONBOARDING, 'true');
        onComplete();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        slides={slides}
        renderSlide={({ item }) => <Carousel.SlideItem item={item} />}
        onScroll={scrollHandler}
        onChange={setCurrentIndex}
      />

      <Carousel.Paginator data={slides} scrollX={scrollX} />
      <Carousel.NextButton
        onPress={pressNextHandler}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
