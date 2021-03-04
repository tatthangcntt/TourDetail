import React, {useState, useCallback} from 'react';
import {StyleSheet, Platform, View, SafeAreaView, Animated} from 'react-native';
import R from 'res/R';
import {BasicImageButton} from 'libraries/components/Buttons/BasicButton';
import {useNavigation} from '@react-navigation/native';

const HeaderOpacity = (props) => {
  const {headerOpacity} = props;
  console.log('HeaderOpacity', {headerOpacity});
  const [heightLayout, setHeightLayout] = useState(0);
  const navigation = useNavigation();
  const onLayout = useCallback((event) => {
    console.log('heightLayout');
    setHeightLayout(event?.nativeEvent?.layout?.height);
  }, []);
  const onClosePress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <>
      <Animated.View
        style={[styles.view, {opacity: headerOpacity, height: heightLayout}]}
      />
      <SafeAreaView onLayout={onLayout} style={[styles.safeAreaViewStyle]}>
        <BasicImageButton
          onPress={onClosePress}
          buttonStyle={[styles.btn]}
          imageStyle={styles.img}
          imageSource={R.images.Closed}
        />
        <View style={R.mainStyles.container} />
        <BasicImageButton
          buttonStyle={[styles.btn]}
          imageStyle={styles.img}
          imageSource={R.images.Share}
        />
        <BasicImageButton
          buttonStyle={[styles.btn]}
          imageStyle={styles.img}
          imageSource={R.images.HeartButton}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginBottom: R.verticalScale(5),
    marginHorizontal: R.verticalScale(10),
    marginTop:
      Platform.OS === 'android' ? R.verticalScale(18) : R.verticalScale(5),
    width: R.verticalScale(35),
    height: R.verticalScale(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: R.verticalScale(35 / 2),
    ...R.mainStyles.shadow,
  },
  img: {
    width: R.verticalScale(15),
    height: R.verticalScale(15),
    resizeMode: 'contain',
  },
  safeAreaViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: R.sizes.DEVICE_WIDTH,
    // height: R.verticalScale(50),
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    zIndex: 100,
  },
  view: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: R.sizes.DEVICE_WIDTH,
    backgroundColor: 'white',
    zIndex: 100,
    padding: R.verticalScale(0),
  },
});
export default React.memo(HeaderOpacity);
