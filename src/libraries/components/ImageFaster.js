import React, {useState, useCallback} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';
import faker from 'faker';
import R from 'res/R';
export const ImageFaster = ({
  source,
  images = {},
  withPlaceholder = false,
  placeholderProps = {},
  emptyImage = {uri: `${faker.image.imageUrl()}`},
  children,
  onLoad,
  isDetail = false,
  style,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [defaultImage, setDefaultImage] = useState(undefined);
  if (!source) {
    source = {uri: `${faker.image.imageUrl()}`};
  }
  // console.log(source);
  const onLoadStart = useCallback(() => {
    setLoaded(false);
  }, []);
  const onLoadEnd = useCallback(() => {
    setLoaded(true);
  }, []);
  const onloadError = useCallback(() => {
    setDefaultImage(R.images.NoAvatar);
  }, []);
  return (
    <View style={[styles.vImage, style]}>
      <FastImage
        style={style}
        source={defaultImage ? defaultImage : source}
        onLoadStart={onLoadStart}
        onError={onloadError}
        onLoadEnd={onLoadEnd}
        resizeMode="cover"
        {...rest}
      />
      {!loaded && <ActivityIndicator style={styles.loading} />}
    </View>
  );
};

const styles = StyleSheet.create({
  vImage: {
    alignSelf: 'center',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loading: {alignSelf: 'center', position: 'absolute'},
});

export default ImageFaster;
