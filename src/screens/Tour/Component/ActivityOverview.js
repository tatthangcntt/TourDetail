import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import R from 'res/R';
import BaseText from 'libraries/components/BaseText';
import GroupImageAndText from 'libraries/components/Texts/GroupImageAndText';
import Collapsible from 'react-native-collapsible';

const ActivityOverview = (props) => {
  const {style, isCollapsed = false, data} = props;
  const [isOpen, setIsOpen] = useState(isCollapsed);
  const onPress = useCallback(() => {
    // setIsOpen((isOpen) => !isOpen);
  }, []);
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress} style={[R.mainStyles.row]}>
        <BaseText numberOfLines={1} style={styles.title}>
          {'Activity Overview' ?? R.strings.no_info}
        </BaseText>
        {isOpen && (
          <Image style={R.mainStyles.icon} source={R.images.icon_eye} />
        )}
      </TouchableOpacity>
      <Collapsible collapsed={isOpen} style={styles.collapsibleStyle}>
        <GroupImageAndText
          imageSource={R.images.FreeCancelation}
          imageStyle={[styles.imageGreenStyle]}
          textStyle={styles.textGreenStyle}
          numberOfLines={1}
          style={styles.imageTextContainer}
          text={data?.cancellation_policy?.slice(0, 20) || R.strings.no_info}
        />
        <GroupImageAndText
          imageSource={R.images.Duration}
          imageStyle={[styles.imageStyle]}
          textStyle={styles.textStyle}
          numberOfLines={1}
          style={styles.imageTextContainer}
          text={data?.duration_in_text?.slice(0, 20) || R.strings.no_info}
        />
        <GroupImageAndText
          imageSource={R.images.Pickup}
          imageStyle={[styles.imageStyle]}
          textStyle={styles.textStyle}
          numberOfLines={1}
          style={styles.imageTextContainer}
          text={
            data?.meeting_point_or_pickup_address?.slice(0, 20) ||
            R.strings.no_info
          }
        />
        <GroupImageAndText
          imageSource={R.images.Group}
          imageStyle={[styles.imageStyle]}
          textStyle={styles.textStyle}
          numberOfLines={1}
          style={styles.imageTextContainer}
          text={data?.max_quantity || 0}
        />
        <GroupImageAndText
          imageSource={R.images.Language}
          imageStyle={[styles.imageStyle]}
          textStyle={styles.textStyle}
          numberOfLines={1}
          style={styles.imageTextContainer}
          text={data?.languages[0] || R.strings.no_info}
        />
        <GroupImageAndText
          imageSource={R.images.CovidProtect}
          imageStyle={[styles.imageStyle]}
          textStyle={styles.textStyle}
          numberOfLines={1}
          style={styles.imageTextContainer}
          text={data?.covid19_precautions?.slice(0, 20) || R.strings.no_info}
        />
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  imageGreenStyle: {
    width: R.verticalScale(30),
    height: R.verticalScale(30),
    resizeMode: 'contain',
    marginRight: R.verticalScale(10),
    tintColor: R.colors.mainColor2,
  },
  textGreenStyle: {
    color: R.colors.mainColor2,
  },
  imageTextContainer: {
    flex: 1,
    marginTop: R.verticalScale(10),
  },
  imageStyle: {
    width: R.verticalScale(30),
    height: R.verticalScale(30),
    resizeMode: 'contain',
    marginRight: R.verticalScale(10),
  },
  textStyle: {
    color: R.colors.grey800,
  },
  collapsibleStyle: {
    marginHorizontal: R.verticalScale(10),
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
    paddingVertical: R.verticalScale(20),
    marginHorizontal: R.verticalScale(20),
    borderBottomWidth: 0.5,
    backgroundColor: 'white',
    borderBottomColor: R.colors.grey500,
  },
});
export default React.memo(ActivityOverview);
