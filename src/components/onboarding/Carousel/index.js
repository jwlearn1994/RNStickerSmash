// https://www.youtube.com/watch?v=r2NJJye0XnM
import { useState, useRef, forwardRef, createRef } from 'react';
import Animated from 'react-native-reanimated';

import CarouselItem from './CarouselItem';
import Paginator from './Paginator';
import NextButton from './NextButton';

const Carousel = forwardRef(function Carousel({
  slides,
  renderSlide,
  onScroll = () => {},
  onChange = () => {},
}, ref) {
  const [componentRef] = useState(() => ref || createRef());

  // props for the onViewableItemsChanged callback
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length) {
      onChange(viewableItems[0].index);
    }
  }).current;

  // detect when an item is 50% in view
  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  return (
    <Animated.FlatList
      ref={componentRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={32}
      keyExtractor={(item) => item.id}
      data={slides}
      renderItem={renderSlide}
      onScroll={onScroll}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={viewableItemsChanged}
    />
  );
})

Carousel.SlideItem = CarouselItem;
Carousel.Paginator = Paginator;
Carousel.NextButton = NextButton;

export default Carousel;
