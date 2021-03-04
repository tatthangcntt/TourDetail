import images from './images';
import strings from './strings';
import colors from './colors';
import mainStyles from './mainStyles';
import sizes from './size';
import {verticalScale, moderateScale} from 'libraries/utils/Scale';
var USER_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3MSwicm9sZSI6InBhcnRuZXIiLCJlbWFpbCI6InRhdHRoYW5nY250dEBnbWFpbC5jb20iLCJleHAiOjE2MTcyOTUzNDV9.FFaooLtT_MSkcX02U3I6dzD0Yaj-zwPxU5JWM9Wdsxg';
var LIST_USER = []; //Danh sach user trong he thong
// import i18n from 'locales/i18n';
// import fonts from './fonts'
var TENANT = 'sharp';
const R = {
  strings,
  images,
  colors,
  mainStyles,
  sizes,
  USER_TOKEN,
  LIST_USER,
  TENANT,
  verticalScale,
  moderateScale,
  // i18n
  // fonts,
};

export default R;
