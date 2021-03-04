import React, {useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import R from 'res/R';
import ImageFaster from 'libraries/components/ImageFaster';
const ImageCarousel = (props) => {
  console.log('ImageCarousel');
  const {data, style} = props;
  const [activeSlide, setActiveSlide] = useState(0);

  // const renderKeyExtractor = useCallback((item) => item, []);
  const renderItem = useCallback(({item}) => {
    console.log('renderItem', {item});
    return (
      <ImageFaster
        resizeMethod={'resize'}
        style={styles.itemImage}
        source={{
          uri: item,
        }}
      />
    );
  }, []);

  const onSnapToItem = useCallback((index) => {
    setActiveSlide(index);
  }, []);

  return (
    <View style={style}>
      <Carousel
        data={data}
        // keyExtractor={renderKeyExtractor}
        renderItem={renderItem}
        sliderWidth={R.sizes.DEVICE_WIDTH}
        itemWidth={R.sizes.DEVICE_WIDTH}
        hasParallaxImages={true}
        firstItem={0}
        autoplay={false}
        loop={true}
        windowSize={4}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        activeSlideAlignment={'center'}
        useScrollView={true}
        onSnapToItem={onSnapToItem}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerStyle}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inactiveDotStyle: {
    backgroundColor: 'white',
  },
  dotStyle: {
    width: R.verticalScale(10),
    height: R.verticalScale(10),
    borderRadius: R.verticalScale(10) / 2,
    marginHorizontal: R.verticalScale(0),
    backgroundColor: R.colors.mainColor,
  },
  containerStyle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: R.verticalScale(0),
    alignSelf: 'center',
    zIndex: 10,
  },
  itemImage: {
    width: R.sizes.DEVICE_WIDTH,
    height: R.sizes.DEVICE_WIDTH * 0.7,
    resizeMode: 'cover',
  },
});
export default React.memo(ImageCarousel);
