import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../utils/ResponsiveScreen';
type props = {
  page: string;
};

const Header: React.FC<props> = ({page}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerItem}>
        <Image
          style={styles.icon}
          source={
            page == 'find'
              ? require('../../asset/images/settings.png')
              : require('../../asset/images/musicon.png')
          }
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
          style={[
            styles.icon,
            {marginRight: wp(2)},
            page == 'find' ? {height: hp(5), width: wp(18)} : null,
          ]}
          source={
            page == 'find'
              ? require('../../asset/images/easy.png')
              : require('../../asset/images/settings.png')
          }
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
