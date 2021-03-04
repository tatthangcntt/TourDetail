import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import R from 'res/R';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: R.colors.mainColor,
    paddingVertical: R.verticalScale(13),
    width: R.sizes.DEVICE_WIDTH - R.verticalScale(40),
    // marginHorizontal:R.verticalScale(12),
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: R.verticalScale(5),
    marginTop: R.verticalScale(8),
    marginBottom: R.verticalScale(20),
  },
  textStyle: {
    color: '#fff',
    fontSize: R.verticalScale(14),
    fontWeight: '800',
  },
  iconStyle: {
    width: R.verticalScale(25),
    height: R.verticalScale(25),
    resizeMode: 'contain',
    marginHorizontal: R.verticalScale(10),
  },
});
export const BasicTextButton = (props) => {
  const {disabled, onPress, buttonStyle, textButton, textStyle} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.buttonStyle, buttonStyle]}>
      <Text style={[styles.textStyle, textStyle]}>{textButton}</Text>
    </TouchableOpacity>
  );
};

BasicTextButton.prototype.props = {
  textButton: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};
export const BasicTextButtonIcon = (props) => {
  const {
    leftIconPath,
    rightIconPath,
    disabled,
    onPress,
    buttonStyle,
    textButton,
    textStyle,
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.buttonStyle, buttonStyle]}>
      {leftIconPath ? (
        <Image source={leftIconPath} style={[styles.iconStyle]} />
      ) : null}
      <Text style={[styles.textStyle, textStyle]}>{textButton}</Text>
      {rightIconPath ? (
        <Image source={rightIconPath} style={[styles.iconStyle]} />
      ) : null}
    </TouchableOpacity>
  );
};

BasicTextButtonIcon.prototype.props = {
  textButton: PropTypes.string.isRequired,
  leftIconPath: PropTypes.string,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export const BasicDisabledButton = (props) => {
  const {buttonStyle, textStyle, textButton} = props;
  return (
    <TouchableWithoutFeedback>
      <View style={buttonStyle}>
        <Text style={textStyle}>{textButton}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

BasicDisabledButton.prototype.props = {
  textButton: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export const BasicImageButton = (props) => {
  console.log('BasicImageButton');
  const {disabled, onPress, buttonStyle, imageSource, imageStyle} = props;
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={buttonStyle}>
      <Image source={imageSource} style={imageStyle} resizeMode="contain" />
    </TouchableOpacity>
  );
};

BasicImageButton.prototype.props = {
  imageSource: PropTypes.number.isRequired,
  buttonStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};
