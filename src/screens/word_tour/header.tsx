import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {widthPrecent as wp} from '../../utils/ResponsiveScreen';

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
