import {BackHandler, Dimensions} from 'react-native';
import R from 'res/R';
import moment from 'moment';
import 'moment/locale/vi';
import {useEffect} from 'react';
moment.locale('vi');

export function useBackButton(handler) {
  // Frustration isolated! Yay! 🎉
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
}
export function convertTimeFromNow(time) {
  if (time) {
    return moment(time).fromNow();
  } else {
    return R.strings.no_content;
  }
}
export function formatTime(time) {
  if (time) {
    return moment(time).format('DD/MM/YYYY');
  } else {
    return '--/--';
  }
}

const {width, height} = Dimensions.get('window');
// var DeviceInfo = require('react-native-device-info');
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
var heightCustom = 0;
console.log('height::', height);
console.log('height::', width);
heightCustom = (680 * 375) / 350;
//DeviceInfo.getModel() === 'iPhone X'
if (height === 812) {
  //iphone X
  heightCustom = 680;
} else if (height === 896) {
  heightCustom = 700;
} else {
  heightCustom = height;
}
const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (heightCustom / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};
