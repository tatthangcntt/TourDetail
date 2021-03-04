import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import R from 'res/R';
import MainHeader from 'libraries/components/Header/MainHeader';
import apis from 'libraries/networking/apis';
import {showMessage} from 'libraries/components/DropdownMessage';
import constants from 'libraries/utils/constants';
import ItemTour from './Component/ItemTour';
import {
  hideLoading,
  showLoading,
} from 'libraries/components/Loading/LoadingModal';
import GroupImageAndText from 'libraries/components/Texts/GroupImageAndText';
import RNGooglePlaces from 'react-native-google-places';

const ListTours = ({route, navigation}) => {
  const [listData, setListData] = useState([]);
  const [addressStart, setAddressStart] = useState('');
  const [addressStop, setAddressStop] = useState('');
  const params = {
    lat_bottom_right: 37.0768407426,
    lon_bottom_right: -121.03312429980001,
    lat_top_left: 37.599575657399996,
    lon_top_left: -122.7395329002,
    fbclid: 'IwAR1YhVsXs5dr3o7Jxezn1Ql01eMGxfXr8B0tATgN-IvGl_Uw6_lMnlgktVU',
    page: 1,
    count: 10,
  };
  const [loading, setLoading] = useState(false);
  const onPress = useCallback(
    (item) => {
      console.log({item});
      showLoading();
      apis.fetch(apis.PATH.TOUR + `/${item.id}`, {}, true).then((res) => {
        console.log(res);
        hideLoading();
        if (res?.success) {
          res?.data &&
            navigation.navigate('TourDetail', {
              data: res.data,
              item,
              favorites: listData.slice(0, 5),
            });
        } else {
          showMessage(constants.MESSAGE_TYPE.WARN, 'Error request');
        }
      });
    },
    [navigation, listData],
  );
  const renderItem = useCallback(
    ({item}) => (
      <ItemTour
        data={item}
        style={styles.listView}
        width={R.sizes.DEVICE_WIDTH / 2 - R.verticalScale(20)}
        onPress={onPress}
      />
    ),
    [onPress],
  );

  useEffect(() => {
    onFetchListTour();
  }, [onFetchListTour]);

  const onFetchListTour = useCallback(() => {
    setLoading(true);
    apis.fetch(apis.PATH.TOUR, params).then((res) => {
      console.log({res});
      setLoading(false);
      if (res?.success) {
        res?.data && setListData(res.data);
      } else {
        showMessage(constants.MESSAGE_TYPE.WARN, 'Error request');
      }
    });
  }, [params]);
  const onPressLocationStart = useCallback(() => {
    RNGooglePlaces.openAutocompleteModal().then((place) => {
      console.log({place});
      place?.address && setAddressStart(place.address);
      params.lat_bottom_right = place?.location?.latitude || 37.0768407426;
      params.lon_bottom_right =
        place?.location?.longitude || -121.03312429980001;
      onFetchListTour();
    });
  }, [onFetchListTour, params.lat_bottom_right, params.lon_bottom_right]);
  const onPressLocationStop = useCallback(() => {
    RNGooglePlaces.openAutocompleteModal().then((place) => {
      console.log({place});
      place?.address && setAddressStop(place.address);
      params.lat_top_left = place?.location?.latitude || 37.599575657399996;
      params.lon_top_left = place?.location?.longitude || -122.7395329002;
      onFetchListTour();
    });
  }, [onFetchListTour, params.lat_top_left, params.lon_top_left]);
  return (
    <View style={styles.fill}>
      <MainHeader headerTitle={'List tours'} />
      <View style={[styles.vFilter]}>
        <GroupImageAndText
          onPress={onPressLocationStart}
          style={styles.btnLocation}
          imageSource={R.images.Location}
          textStyle={styles.textLocationStyle}
          numberOfLines={1}
          text={addressStart ? addressStart : 'Default Place 1'}
        />
        <GroupImageAndText
          onPress={onPressLocationStop}
          style={styles.btnLocation}
          imageSource={R.images.Location}
          numberOfLines={1}
          textStyle={styles.textLocationStyle}
          text={addressStop ? addressStop : 'Default Place 2'}
        />
      </View>
      <FlatList
        data={listData}
        refreshing={loading}
        renderItem={renderItem}
        onRefresh={onFetchListTour}
        numColumns={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  btnLocation: {
    marginTop: 0,
    flex: 1,
  },
  vFilter: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: R.verticalScale(20),
    marginTop: R.verticalScale(10),
    marginBottom: R.verticalScale(5),
    borderRadius: R.verticalScale(5),
    padding: R.verticalScale(10),
    ...R.mainStyles.shadow,
  },
  textLocationStyle: {
    flex: 1,
    marginRight: R.verticalScale(5),
  },
  listView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: R.verticalScale(20),
    paddingVertical: R.verticalScale(20),
    borderBottomWidth: 0.5,
    borderColor: R.colors.grey400,
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
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
export default ListTours;
