import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import R from 'res/R';
import BaseText from 'libraries/components/BaseText';
import GroupImageAndText from 'libraries/components/Texts/GroupImageAndText';
import Collapsible from 'react-native-collapsible';
import {useNavigation} from '@react-navigation/native';

const CollapsibleText = (props) => {
  const {style, isCollapsed = false, data, title} = props;
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(isCollapsed);
  const onPress = useCallback(() => {
    isCollapsed && navigation.navigate('DetailContent', {data, title});
  }, [data, isCollapsed, navigation, title]);
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress} style={[R.mainStyles.row]}>
        <BaseText numberOfLines={1} style={styles.title}>
          {title ?? R.strings.no_info}
        </BaseText>
        {isCollapsed && (
          <Image
            style={[R.mainStyles.small_icon, styles.icon]}
            source={R.images.Forward}
          />
        )}
      </TouchableOpacity>
      <Collapsible collapsed={isOpen} style={styles.collapsibleStyle}>
        <BaseText style={styles.textContent}>
          {data || R.strings.no_info}
        </BaseText>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: R.verticalScale(10),
  },
  collapsibleStyle: {
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
export default React.memo(CollapsibleText);
