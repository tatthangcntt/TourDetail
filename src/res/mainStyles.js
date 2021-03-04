import {StyleSheet, Dimensions} from 'react-native';
import {verticalScale} from 'libraries/utils/Scale';
const DEVICE_WIDTH = Dimensions.get('window').width;
import colors from './colors';

const mainStyles = StyleSheet.create({
  textDate: {
    color: colors.grey500,
  },
  textTitleBlack: {
    fontSize: verticalScale(25),
    fontWeight: 'bold',
    color: 'black',
  },
  textTitleWhite: {
    fontSize: verticalScale(16),
    fontWeight: '600',
    color: 'white',
  },
  textContent: {},
  imgIconMenu: {
    width: verticalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
    marginHorizontal: verticalScale(20),
    tintColor: 'black',
  },
  icon: {
    width: verticalScale(30),
    height: verticalScale(30),
    resizeMode: 'contain',
    marginHorizontal: verticalScale(10),
    tintColor: 'black',
  },
  small_icon: {
    width: verticalScale(15),
    height: verticalScale(15),
    resizeMode: 'contain',
    tintColor: 'black',
  },
  textTitle: {
    fontSize: verticalScale(16),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textTitleBold: {
    fontSize: verticalScale(18),
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  fill: {
    flex: 1,
  },
  line: {
    borderBottomColor: colors.grey500,
    borderBottomWidth: 1,
    width: DEVICE_WIDTH,
    marginVertical: verticalScale(10),
    alignSelf: 'center',
  },
});
export default mainStyles;
