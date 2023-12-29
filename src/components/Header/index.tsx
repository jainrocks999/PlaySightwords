import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../utils/ResponsiveScreen';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerItem}>
        <Image
          style={styles.icon}
          source={require('../../asset/images/musicon.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.headerItem}>
        <Image
          style={styles.title}
          source={require('../../asset/images/nprimary.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.headerItem}>
        <Image
          style={[styles.icon, {marginRight: wp(2)}]}
          source={require('../../asset/images/settings.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
    paddingTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerItem: {
    justifyContent: 'center',
    height: hp(6),
  },
  icon: {
    height: '100%',
    width: hp(6),
    alignSelf: 'flex-start',
  },
  title: {
    height: hp(5),
    width: wp(45),
  },
});
