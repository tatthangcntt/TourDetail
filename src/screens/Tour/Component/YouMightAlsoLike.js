import React, {useCallback} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import R from 'res/R';
import BaseText from 'libraries/components/BaseText';
import ItemTour from './ItemTour';
const reviewSize = R.sizes.DEVICE_WIDTH / 2 - R.verticalScale(20);
const YouMightAlsoLike = (props) => {
  const {style, data, title} = props;
  const renderItemFavorites = useCallback((item, index) => {
    return <ItemTour data={item} width={reviewSize} disablePress />;
  }, []);
  return (
    <View style={[styles.container, style]}>
      <BaseText numberOfLines={1} style={styles.title}>
        {title ?? R.strings.no_info}
      </BaseText>
      <View style={styles.collapsibleStyle}>
        <ScrollView
          horizontal
          width={R.sizes.DEVICE_WIDTH}
          showsHorizontalScrollIndicator={false}>
          {data?.length && data.map(renderItemFavorites)}
          <View style={styles.space} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    width: R.verticalScale(30),
  },
  buttonStyle: {
    paddingVertical: R.verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: R.colors.mainColor2,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  textButtonStyle: {
    fontWeight: 'bold',
    // color: 'black',
    // fontSize: R.moderateScale(18, 0.4),
    color: R.colors.mainColor2,
  },
  imageTextContainer: {
    flex: 1,
    marginTop: R.verticalScale(10),
  },
  imageStyle: {
    width: R.verticalScale(20),
    height: R.verticalScale(20),
    resizeMode: 'contain',
    marginRight: R.verticalScale(5),
    tintColor: R.colors.mainColor2,
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: R.moderateScale(18, 0.4),
  },
  collapsibleStyle: {
    marginBottom: R.verticalScale(10),
    marginTop: R.verticalScale(10),
    marginRight: R.verticalScale(10),
    // maxHeight: 200,
  },
  textContent: {
    marginTop: R.verticalScale(15),
    marginHorizontal: 1,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    fontSize: R.moderateScale(18, 0.4),
  },
  container: {
    paddingVertical: R.verticalScale(15),
    marginHorizontal: R.verticalScale(20),
    // borderBottomWidth: 0.5,
    backgroundColor: 'white',
    // borderBottomColor: R.colors.grey500,
  },
});
export default React.memo(YouMightAlsoLike);
