import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPrecent as wp,
  heightPercent as hp,
} from '../../utils/ResponsiveScreen';

const Header = () => {
  return (
    <View style={styles.headercontainer}>
      <View style={styles.headerItem}>
        <Image
          style={styles.icon}
          source={require('../../asset/images/settings.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.headerItem}>
        <Image
          style={[styles.icon, {alignSelf: 'center'}]}
          source={require('../../asset/images/redbtn.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.headerItem}>
        {/* <Image
          style={[styles.icon, {marginRight: wp(2)}]}
          source={require('../../asset/images/settings.png')}
          resizeMode="contain"
        /> */}
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  headercontainer: {
    paddingHorizontal: wp(2),
    paddingTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerItem: {
    justifyContent: 'center',
    height: hp(6),
    width: '33%',
  },
  icon: {
    height: '100%',
    width: hp(6),
    alignSelf: 'flex-start',
  },
});
