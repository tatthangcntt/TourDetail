import React from 'react';
import {StyleSheet, View} from 'react-native';
import R from 'res/R';
import BaseText from 'libraries/components/BaseText';
import GroupImageAndText from 'libraries/components/Texts/GroupImageAndText';

const TitleAndRate = (props) => {
  const {data, style} = props;
  return (
    <View style={[styles.container, style]}>
      <BaseText numberLine={2} style={R.mainStyles.textTitleBlack}>
        {data?.name || R.strings.no_info}
      </BaseText>
      <View style={R.mainStyles.row}>
        <GroupImageAndText
          imageSource={R.images.Location}
          textStyle={styles.textLocationStyle}
          numberOfLines={1}
          style={R.mainStyles.fill}
          text={data?.city || R.strings.no_info}
        />
        <GroupImageAndText
          style={R.mainStyles.fill}
          imageSource={R.images.Star}
          imageStyle={styles.imageStyle}
          textStyle={styles.textStyle}
          text={data?.average_rating || 0}
          textNote={`(${data?.number_of_reviews || 0})`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLocationStyle: {
    flex: 1,
    marginRight: R.verticalScale(5),
  },
  imageStyle: {
    tintColor: R.colors.mainColor2,
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    paddingVertical: R.verticalScale(25),
    marginHorizontal: R.verticalScale(20),
    borderBottomWidth: 0.5,
    backgroundColor: 'white',
    borderBottomColor: R.colors.grey600,
  },
});
export default React.memo(TitleAndRate);
