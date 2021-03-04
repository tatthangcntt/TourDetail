import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {verticalScale} from 'libraries/utils/Scale';
const font_name = undefined;
const size_content = verticalScale(14.5);
const BaseText = (props) => {
  const {numberLine, children, style, isRequire = false} = props;

  if (numberLine === undefined) {
    return (
      <Text
        {...props}
        allowFontScaling={false}
        style={[{fontSize: size_content}, style, {fontFamily: font_name}]}>
        {children}
        {isRequire ? <Text style={styles.styleText}> *</Text> : ''}
      </Text>
    );
  } else {
    return (
      <Text
        {...props}
        allowFontScaling={false}
        numberOfLines={numberLine}
        ellipsizeMode={'tail'}
        style={[{fontSize: size_content}, style, {fontFamily: font_name}]}>
        {children}
      </Text>
    );
  }
};
const styles = StyleSheet.create({
  styleText: {color: 'red', fontSize: 16},
});
export default BaseText;
