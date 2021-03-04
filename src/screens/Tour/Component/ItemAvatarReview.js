import React from 'react';
import {StyleSheet, View} from 'react-native';
import R from 'res/R';
import BaseText from 'libraries/components/BaseText';
import ImageFaster from 'libraries/components/ImageFaster';
import moment from 'moment';
const ItemAvatarReview = (props) => {
  const {data, style} = props;
  // const onPressItem = useCallback(() => {
  //   onPress(data);
  // }, [data, onPress]);
  return (
    <View style={[styles.container, style]}>
      <ImageFaster
        source={data?.reviewer_avatar || R.images.NoAvatar}
        style={styles.avatar}
      />
      <View style={styles.vNameTime}>
        <BaseText numberLine={1} style={styles.textNameStyle}>
          {data?.reviewer_name || R.strings.no_info}
        </BaseText>
        <BaseText numberLine={1} style={styles.textTimeStyle}>
          {data?.reviewed_at
            ? moment(data?.reviewed_at).fromNow()
            : R.strings.no_info}
        </BaseText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vNameTime: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: R.verticalScale(10),
  },
  avatar: {
    width: R.verticalScale(50),
    height: R.verticalScale(50),
    resizeMode: 'cover',
    // marginRight: R.verticalScale(10),
    borderRadius: R.verticalScale(50 / 2),
  },
  textTimeStyle: {
    // fontSize: R.moderateScale(12, 0.4),
    // fontWeight: 'bold',
    color: R.colors.grey800,
    marginLeft: R.verticalScale(3),
  },
  textNameStyle: {
    // fontSize: R.moderateScale(12, 0.4),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: R.verticalScale(3),
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
export default React.memo(ItemAvatarReview);
