import React, {useCallback} from 'react';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import R from 'res/R';
import MainHeader from 'libraries/components/Header/MainHeader';
import ItemReview from './Component/ItemReview';
const reviewSize = R.sizes.DEVICE_WIDTH - R.verticalScale(40);
const ListReviews = ({route, navigation}) => {
  const {data} = route.params;
  console.log({data});
  const onPressLeft = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const renderItem = useCallback(({item, index}) => {
    return <ItemReview data={item} width={reviewSize} />;
  }, []);
  return (
    <View style={styles.fill}>
      <MainHeader
        iconLeft={R.images.Back}
        onPressLeftButton={onPressLeft}
        headerTitle={'List reviews'}
      />
      <FlatList
        style={[styles.listView]}
        data={data?.reviews || []}
        refreshing={false}
        renderItem={renderItem}
      />
      <SafeAreaView />
    </View>
  );
};
const styles = StyleSheet.create({
  listView: {
    alignSelf: 'center',
  },
  fillText: {
    flex: 1,
    margin: R.verticalScale(20),
  },
  font: {
    fontSize: R.moderateScale(16, 0.4),
  },
  view: {
    width: R.sizes.DEVICE_WIDTH,
    height: 2 * R.sizes.DEVICE_HEIGHT,
    backgroundColor: 'white',
  },
  scrollV: {
    width: R.sizes.DEVICE_WIDTH,
    flex: 1,
    backgroundColor: 'white',
  },
  fill: {
    flex: 1,
    alignItems: 'center',
  },
});
export default ListReviews;
