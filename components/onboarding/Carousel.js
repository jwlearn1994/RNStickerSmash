// https://www.youtube.com/watch?v=r2NJJye0XnM
import { useRef } from 'react';
import Animated from 'react-native-reanimated';

export default function Carousel({
  slides,
  renderSlide,
  onScroll = () => {},
  onChange = () => {},
}) {
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
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
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
}