import React, {useCallback, useState, useMemo} from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import R from 'res/R';
import BaseText from 'libraries/components/BaseText';
import GroupImageAndText from 'libraries/components/Texts/GroupImageAndText';
import Collapsible from 'react-native-collapsible';

const ActivityOverview = (props) => {
  const {style, isCollapsed = false, data} = props;

  const inclusionData = useMemo(() => {
    return data?.inclusion?.split('<br>') || [];
  }, [data]);
  const exclusionData = useMemo(() => {
    return data?.exclusion?.split('<br>') || [];
  }, [data]);
  console.log({inclusionData, exclusionData});
  const [isOpen, setIsOpen] = useState(isCollapsed);
  const onPress = useCallback(() => {
    // setIsOpen((isOpen) => !isOpen);
  }, []);
  const renderInclusion = useCallback((item, index) => {
    return (
      <GroupImageAndText
        imageSource={R.images.checked}
        imageStyle={[styles.imageGreenStyle]}
        textStyle={styles.textGreenStyle}
        numberOfLines={1}
        style={styles.imageTextContainer}
        text={item ?? R.strings.no_info}
      />
    );
  }, []);
  const renderExclusion = useCallback((item, index) => {
    return (
      <GroupImageAndText
        imageSource={R.images.uncheck}
        imageStyle={[styles.imageStyle]}
        textStyle={styles.textStyle}
        numberOfLines={1}
        style={styles.imageTextContainer}
        text={item ?? R.strings.no_info}
      />
    );
  }, []);
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress} style={[R.mainStyles.row]}>
        <BaseText numberOfLines={1} style={styles.title}>
          {'What is included' ?? R.strings.no_info}
        </BaseText>
        {isOpen && (
          <Image style={R.mainStyles.icon} source={R.images.icon_eye} />
        )}
      </TouchableOpacity>
      <Collapsible collapsed={isOpen} style={styles.collapsibleStyle}>
        {!inclusionData.length && !exclusionData.length && (
          <BaseText>{R.strings.no_info}</BaseText>
        )}
        {inclusionData.length && inclusionData.map(renderInclusion)}
        {exclusionData.length && exclusionData.map(renderExclusion)}
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  imageGreenStyle: {
    width: R.verticalScale(10),
    height: R.verticalScale(10),
    resizeMode: 'contain',
    marginRight: R.verticalScale(0),
    tintColor: R.colors.mainColor2,
  },
  textGreenStyle: {
    color: R.colors.grey800,
  },
  imageTextContainer: {
    flex: 1,
    marginTop: R.verticalScale(10),
  },
  imageStyle: {
    width: R.verticalScale(10),
    height: R.verticalScale(10),
    resizeMode: 'contain',
    marginRight: R.verticalScale(0),
    tintColor: R.colors.red800,
  },
  textStyle: {
    color: R.colors.grey800,
  },
  collapsibleStyle: {
    marginHorizontal: R.verticalScale(10),
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
    paddingVertical: R.verticalScale(20),
    marginHorizontal: R.verticalScale(20),
    borderBottomWidth: 0.5,
    backgroundColor: 'white',
    borderBottomColor: R.colors.grey500,
  },
});
export default React.memo(ActivityOverview);
