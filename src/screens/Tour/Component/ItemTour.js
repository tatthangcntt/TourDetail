import React, {useCallback} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import R from 'res/R';
import BaseText from 'libraries/components/BaseText';
import GroupImageAndText from 'libraries/components/Texts/GroupImageAndText';
import ImageFaster from 'libraries/components/ImageFaster';
import {BasicImageButton} from 'libraries/components/Buttons/BasicButton';

const ItemTour = (props) => {
  const {data, style, width, onPress, disablePress = false} = props;
  const onPressItem = useCallback(() => {
    !disablePress && onPress(data);
  }, [data, onPress, disablePress]);
  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={[styles.container, style, {width: width}, R.mainStyles.shadow]}>
      <ImageFaster
        style={[styles.image, {width: width, height: width * 0.88}]}
        source={
          data?.thumbnail_url ? {uri: data.thumbnail_url} : R.images.noPhoto
        }
      />
      <BasicImageButton
        buttonStyle={[styles.btnFavor]}
        imageStyle={styles.imgFavor}
        imageSource={R.images.Love}
      />
      <View style={[styles.contentV]}>
        <GroupImageAndText
          imageSource={R.images.Location}
          numberOfLines={1}
          imageStyle={styles.smallIcon}
          ellipsizeMode={'tail'}
          textStyle={styles.textStyle}
          style={[styles.groupText]}
          text={data?.city || R.strings.no_info}
        />
        <GroupImageAndText
          style={R.mainStyles.fill}
          imageStyle={styles.smallIcon}
          imageSource={R.images.Star}
          textStyle={styles.textBoldStyle}
          textNoteStyle={styles.textStyle}
          text={data?.average_rating || 0}
          textNote={`(${data?.number_of_reviews || 0})`}
        />
      </View>
      <View style={styles.viewBottom}>
        <BaseText numberLine={2} style={styles.textName}>
          {data?.name || R.strings.no_info}
        </BaseText>
        <View style={[styles.rowText]}>
          <BaseText numberLine={1} style={styles.textPrice}>
            {`From $${data?.price_in_usd || 0}`}
          </BaseText>
          <BaseText style={styles.textPerson}>{' / person'}</BaseText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnFavor: {
    width: R.verticalScale(30),
    height: R.verticalScale(30),
    position: 'absolute',
    top: R.verticalScale(10),
    right: R.verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    borderRadius: R.verticalScale(30 / 2),
  },
  imgFavor: {
    width: R.verticalScale(25),
    height: R.verticalScale(25),
    resizeMode: 'contain',
    tintColor: R.colors.grey600,
  },
  image: {
    borderTopRightRadius: R.verticalScale(10),
    borderTopLeftRadius: R.verticalScale(10),
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: R.verticalScale(5),
  },
  textPerson: {
    fontSize: R.moderateScale(13, 0.4),
    color: R.colors.grey800,
  },
  textPrice: {
    fontSize: R.moderateScale(13, 0.4),
    color: R.colors.grey800,
    fontWeight: 'bold',
  },
  textName: {
    fontSize: R.moderateScale(13, 0.4),
    color: R.colors.grey800,
  },
  viewBottom: {
    padding: R.verticalScale(5),
    alignSelf: 'stretch',
  },
  groupText: {
    flex: 1,
    paddingRight: R.verticalScale(10),
  },
  smallIcon: {
    width: R.verticalScale(10),
    height: R.verticalScale(10),
  },
  contentV: {
    padding: R.verticalScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: R.moderateScale(12, 0.4),
    color: R.colors.grey800,
    marginLeft: R.verticalScale(3),
  },
  textBoldStyle: {
    fontSize: R.moderateScale(12, 0.4),
    fontWeight: 'bold',
    color: R.colors.grey800,
    marginLeft: R.verticalScale(3),
  },
  container: {
    borderRadius: R.verticalScale(10),
    // overflow: 'hidden',
    alignSelf: 'center',
    margin: R.verticalScale(5),
    backgroundColor: 'white',
    ...R.mainStyles.shadow,
  },
});
export default React.memo(ItemTour);
