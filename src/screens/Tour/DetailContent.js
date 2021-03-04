import React, {useCallback} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import R from 'res/R';

import MainHeader from 'libraries/components/Header/MainHeader';
import HTML from 'react-native-render-html';

const DetailContent = ({route, navigation}) => {
  const {data, title} = route.params;
  console.log({data});
  const onPressLeft = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <View style={styles.fill}>
      <MainHeader
        iconLeft={R.images.Back}
        onPressLeftButton={onPressLeft}
        headerTitle={title}
      />
      <ScrollView style={styles.fillText}>
        <HTML source={{html: data}} baseFontStyle={styles.font} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  fillText: {
    flex: 1,
    margin: R.verticalScale(20),
  },
  font: {
    fontSize: R.moderateScale(16, 0.4),
  },
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
export default DetailContent;
