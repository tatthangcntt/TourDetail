import {moderateScale} from 'libraries/utils/Scale';
import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import R from 'res/R';

const GroupImageAndText = (props) => {
  console.log('GroupImageAndText');
  const {
    imageSource,
    text,
    style,
    textStyle,
    imageStyle,
    textNote,
    textNoteStyle,
  } = props;
  return (
    <TouchableOpacity {...props} style={[styles.groupContainer, style]}>
      <Image source={imageSource} style={[styles.imageStyle, imageStyle]} />
      <Text
        allowFontScaling={false}
        {...props}
        style={[styles.textStyle, textStyle]}>
        {text}
      </Text>
      {textNote && (
        <Text
          allowFontScaling={false}
          style={[styles.textNoteStyle, textNoteStyle]}>
          {textNote}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default GroupImageAndText;

const styles = StyleSheet.create({
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: R.verticalScale(10),
  },
  imageStyle: {
    width: R.verticalScale(15),
    height: R.verticalScale(15),
    resizeMode: 'contain',
    tintColor: R.colors.grey600,
  },
  textNoteStyle: {
    fontSize: moderateScale(14, 0.4),
    color: R.colors.grayTextColor,
  },
  textStyle: {
    marginLeft: R.verticalScale(10),
    fontWeight: '400',
    fontSize: moderateScale(14, 0.4),
    color: R.colors.grey800,
  },
  titleStyle: {
    fontSize: R.verticalScale(16),
  },
});
