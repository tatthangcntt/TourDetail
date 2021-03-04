import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import R from 'res/R';

const GroupText = (props) => {
  const {
    labelStyle,
    valueStyle,
    style,
    textNote,
    textNoteStyle,
    title,
    value,
  } = props;
  return (
    <View style={[styles.view, style]}>
      {title && (
        <Text allowFontScaling={false} style={[styles.titleStyle, labelStyle]}>
          {title}
        </Text>
      )}
      {value && (
        <Text
          allowFontScaling={false}
          style={[styles.valueTextStyle, valueStyle]}>
          {value}
        </Text>
      )}
      {textNote && (
        <Text allowFontScaling={false} style={[styles.textNote, textNoteStyle]}>
          {`(${textNote})`}
        </Text>
      )}
    </View>
  );
};

export default GroupText;

const styles = StyleSheet.create({
  textNote: {
    color: 'red',
    marginLeft: R.verticalScale(10),
  },
  view: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: R.verticalScale(3),
  },
  titleStyle: {
    color: R.colors.grey700,
    fontWeight: 'bold',
  },
  valueTextStyle: {
    flex: 1,
    marginLeft: R.verticalScale(10),
    color: 'black',
  },
});
