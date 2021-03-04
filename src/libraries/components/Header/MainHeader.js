import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, Platform, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import R from 'res/R';
import {BasicImageButton} from '../Buttons/BasicButton';
const headerHeight = R.verticalScale(60);
export const HEADER_HEIGHT = headerHeight;

const prototype = {
  onPressLeftButton: PropTypes.func,
  iconLeft: PropTypes.number,
  headerTitle: PropTypes.string.isRequired,
  iconRight: PropTypes.number,
  onPressRightButton: PropTypes.func,
};

class MainHeader extends PureComponent {
  onPressIcon = (onPressIcon) => () => {
    if (onPressIcon) {
      onPressIcon();
    } else {
      this.props.navigation.goBack();
    }
  };
  renderIconButton = (iconSource, onPressIcon) => {
    if (iconSource) {
      return (
        <BasicImageButton
          buttonStyle={styles.imageButtonStyle}
          onPress={onPressIcon}
          imageSource={iconSource}
          imageStyle={styles.iconStyle}
        />
      );
    } else {
      return <View style={styles.buttonStyle} />;
    }
  };

  render() {
    const {
      onPressLeftButton,
      headerColor,
      iconLeft,
      headerTitle,
      iconRight,
      onPressRightButton,
      headerStyle,
      titleStyle,
    } = this.props;
    return (
      <SafeAreaView style={[styles.safeAreaViewStyle, headerColor]}>
        <View style={[styles.container, headerStyle, headerColor]}>
          <View style={styles.headerContent}>
            {this.renderIconButton(iconLeft, onPressLeftButton)}

            <Text style={[styles.titleContentStyle, titleStyle]}>
              {headerTitle}
            </Text>

            {this.renderIconButton(iconRight, onPressRightButton)}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

MainHeader.defaultProps = {
  // onPressLeftButton: ()=>this.props.navigation.goBack()
};

MainHeader.prototype.props = prototype;

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? R.verticalScale(15) : 0,
  },
  container: {
    height: HEADER_HEIGHT,
    width: R.sizes.DEVICE_WIDTH,
    backgroundColor: 'white',
  },
  titleViewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    margin: 5,
    padding: 5,
  },
  imageButtonStyle: {
    padding: R.verticalScale(10),
  },
  titleContentStyle: {
    fontSize: R.verticalScale(20),
    textAlign: 'center',
    // fontFamily: R.fonts.title,
    color: 'black',
  },
  buttonStyle: {
    width: R.verticalScale(30),
    height: R.verticalScale(20),
    resizeMode: 'contain',
    padding: 10,
  },
  iconStyle: {
    width: R.verticalScale(25),
    height: R.verticalScale(20),
    resizeMode: 'contain',
    tintColor: 'black',
  },
});
export default MainHeader;
