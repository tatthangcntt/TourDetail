import React, {useState, useRef} from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  Animated,
  View,
  SafeAreaView,
} from 'react-native';
import R from 'res/R';
import HeaderOpacity from './Component/HeaderOpacity';
import ImageCarousel from './Component/ImageCarousel';
import TitleAndRate from './Component/TitleAndRate';
import CollapsibleText from './Component/CollapsibleText';
import ActivityOverview from './Component/ActivityOverview';
import WhatInclude from './Component/WhatInclude';
import Reviews from './Component/Reviews';
import YouMightAlsoLike from './Component/YouMightAlsoLike';
const TourDetail = ({route, navigation}) => {
  const animatedScrollYValue = useRef(new Animated.Value(0)).current;
  const headerOpacity = animatedScrollYValue.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const {data, item, favorites} = route.params;
  console.log({data, item});
  return (
    <View style={styles.fill}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedScrollYValue}}}],
          {useNativeDriver: true},
        )}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollV}>
        <ImageCarousel data={data?.images || []} />
        <TitleAndRate data={item} />
        <ActivityOverview data={data} />
        <CollapsibleText
          data={data?.overview || R.strings.no_info}
          title={"What You'll Do"}
        />
        <CollapsibleText
          data={data?.overview || R.strings.no_info}
          isCollapsed
          title={'Full Description'}
        />
        <WhatInclude data={data} />
        <CollapsibleText
          data={data?.additional_information || R.strings.no_info}
          isCollapsed
          title={'Before You Book'}
        />
        {item?.number_of_reviews > 0 && <Reviews data={data} item={item} />}
        <CollapsibleText
          data={data?.cancellation_policy || R.strings.no_info}
          title={'Cancellation Policy'}
        />
        <CollapsibleText
          data={data?.covid19_precautions || R.strings.no_info}
          isCollapsed
          title={'COVID-19 Precautions'}
        />
        <YouMightAlsoLike data={favorites} title={'You Might Also Like'} />
        <SafeAreaView />
      </Animated.ScrollView>
      <HeaderOpacity headerOpacity={headerOpacity} />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    width: R.sizes.DEVICE_WIDTH,
    height: 2 * R.sizes.DEVICE_HEIGHT,
    backgroundColor: 'white',
  },
  scrollV: {
    width: R.sizes.DEVICE_WIDTH,
    flex: 1,
    backgroundColor: 'white',
  },
  fill: {
    flex: 1,
  },
});
export default TourDetail;
