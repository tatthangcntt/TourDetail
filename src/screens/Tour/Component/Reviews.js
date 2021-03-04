import React, {useCallback} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import R from 'res/R';
import GroupImageAndText from 'libraries/components/Texts/GroupImageAndText';
import {BasicTextButton} from 'libraries/components/Buttons/BasicButton';
import ItemReview from './ItemReview';
import {useNavigation} from '@react-navigation/native';
const reviewSize = R.sizes.DEVICE_WIDTH - R.verticalScale(80);
const Reviews = (props) => {
  const navigation = useNavigation();
  const {style, data, item} = props;
  const renderItemReview = useCallback((itemReview, index) => {
    return <ItemReview data={itemReview} width={reviewSize} />;
  }, []);
  const onPressListReview = useCallback(() => {
    navigation.navigate('ListReviews', {data});
  }, [data, navigation]);
  return (
    <View style={[styles.container, style]}>
      <GroupImageAndText
        style={R.mainStyles.fill}
        imageSource={R.images.Star}
        imageStyle={styles.imageStyle}
        textStyle={styles.textStyle}
        text={item?.average_rating || 0}
        textNoteStyle={styles.textStyle}
        textNote={`(${item?.number_of_reviews || 0} Reviews)`}
      />
      <View style={styles.collapsibleStyle}>
        <ScrollView
          horizontal
          width={R.sizes.DEVICE_WIDTH}
          showsHorizontalScrollIndicator={false}>
          {data?.reviews?.length && data.reviews.map(renderItemReview)}
          <View style={styles.space} />
        </ScrollView>
        <BasicTextButton
          onPress={onPressListReview}
          buttonStyle={styles.buttonStyle}
          textButton={`Show All ${item?.number_of_reviews || 0} Review`}
          textStyle={styles.textButtonStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    width: R.verticalScale(30),
  },
  buttonStyle: {
    paddingVertical: R.verticalScale(10),
    marginHorizontal: R.verticalScale(30),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: R.colors.mainColor2,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  textButtonStyle: {
    fontWeight: 'bold',
    // color: 'black',
    // fontSize: R.moderateScale(18, 0.4),
    color: R.colors.mainColor2,
  },
  imageTextContainer: {
    flex: 1,
    marginTop: R.verticalScale(10),
  },
  imageStyle: {
    width: R.verticalScale(20),
    height: R.verticalScale(20),
    resizeMode: 'contain',
    marginRight: R.verticalScale(5),
    tintColor: R.colors.mainColor2,
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: R.moderateScale(18, 0.4),
  },
  collapsibleStyle: {
    marginVertical: R.verticalScale(0),
    marginTop: R.verticalScale(10),
    marginRight: R.verticalScale(10),
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
    paddingTop: R.verticalScale(5),
    marginHorizontal: R.verticalScale(20),
    borderBottomWidth: 0.5,
    backgroundColor: 'white',
    borderBottomColor: R.colors.grey500,
  },
});
export default React.memo(Reviews);
