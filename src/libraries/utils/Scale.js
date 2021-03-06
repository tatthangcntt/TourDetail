import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
var heightCustom = 0;

heightCustom = 680*375/350;
//DeviceInfo.getModel() === 'iPhone X'
if(height === 812) //iphone X,11 Pro,Xs,
{
    heightCustom = 680;
}else if(height === 896){ // 11 pro max, XS max,11,xr
    heightCustom = 740;
} else
{
    heightCustom = height;
}
const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => heightCustom / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};
