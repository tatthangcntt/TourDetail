import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import R from 'res/R';
import BaseText from 'libraries/components/BaseText';
import ItemAvatarReview from './ItemAvatarReview';
import ReadMore from 'react-native-read-more-text';

const numberLine = 5;
const ItemReview = (props) => {
  const {data, style, width, isListView = false} = props;
  console.log({data});
  const [isShowSeeMore, setIsShowSeeMore] = useState(false);
  const onTextLayout = useCallback(({nativeEvent: {lines}}) => {
    console.log({lines});
    lines?.length && setIsShowSeeMore(lines.length >= numberLine);
  }, []);
  const renderTruncatedFooter = useCallback(() => {
    return (
      <BaseText numberLine={1} style={styles.textReadMore}>
        {'Read More'}
      </BaseText>
    );
  }, []);
  const renderRevealedFooter = useCallback(() => {
    return null;
  }, []);
  return (
    <View style={[styles.container, style, {width: width}]}>
      <ItemAvatarReview data={data} />
      <View style={[styles.vTextContent]}>
        <ReadMore
          numberOfLines={5}
          renderTruncatedFooter={renderTruncatedFooter}
          renderRevealedFooter={renderRevealedFooter}>
          <BaseText
            numberLine={5}
            style={[styles.textContent]}
            ellipsizeMode="tail"
            onTextLayout={onTextLayout}>
            {data?.comment?.replace('<p>')?.replace('</p>') ||
              R.strings.no_info}
          </BaseText>
        </ReadMore>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vTextContent: {
    marginVertical: R.verticalScale(5),
    marginTop: R.verticalScale(10),
    flex: 1,
    height: numberLine * R.moderateScale(14, 0.4) + R.verticalScale(45),
  },
  textContent: {},
  textReadMore: {
    marginTop: R.verticalScale(10),
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: R.verticalScale(5),
  },
  textPerson: {
    fontSize: R.moderateScale(13, 0.4),
    color: R.colors.grey800,
  },
  textPrice: {
    fontSize: R.moderateScale(13, 0.4),
    color: R.colors.grey800,
    fontWeight: 'bold',
  },
  textName: {
    fontSize: R.moderateScale(13, 0.4),
    color: R.colors.grey800,
  },
  viewBottom: {
    padding: R.verticalScale(5),
    alignSelf: 'stretch',
  },
  groupText: {
    flex: 1,
    paddingRight: R.verticalScale(10),
  },
  smallIcon: {
    width: R.verticalScale(10),
    height: R.verticalScale(10),
  },
  contentV: {
    padding: R.verticalScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: R.moderateScale(12, 0.4),
    color: R.colors.grey800,
    marginLeft: R.verticalScale(3),
  },
  textBoldStyle: {
    fontSize: R.moderateScale(12, 0.4),
    fontWeight: 'bold',
    color: R.colors.grey800,
    marginLeft: R.verticalScale(3),
  },
  container: {
    borderRadius: R.verticalScale(10),
    overflow: 'hidden',
    alignSelf: 'center',
    marginHorizontal: R.verticalScale(10),
    marginVertical: R.verticalScale(10),
    padding: R.verticalScale(15),
    borderColor: R.colors.grey800,

    borderWidth: 1,
    backgroundColor: 'white',
    ...R.mainStyles.shadow,
  },
});
export default React.memo(ItemReview);
