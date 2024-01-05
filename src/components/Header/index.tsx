import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../utils/ResponsiveScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
type props = {
  page: string;
  onLeftPress: () => void;
  onRightPress: () => void;
  onCenterPress: () => void;
};

const Header: React.FC<props> = ({
  page,
  onLeftPress,
  onRightPress,
  onCenterPress,
}) => {
  return (
    <View style={[styles.container, {paddingTop: hp(3)}]}>
      <TouchableOpacity onPress={onLeftPress} style={styles.headerItem}>
        <Image
          style={styles.icon}
          source={
            page == 'find'
              ? require('../../asset/images/settings.png')
              : page == 'bingo'
              ? require('../../asset/images/settings.png')
              : require('../../asset/images/musicon.png')
          }
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onCenterPress} style={styles.headerItem}>
        <Image
          style={[page == 'bingo' ? styles.reapeate : styles.title]}
          source={
            page == 'bingo'
              ? require('../../asset/images/repeatbingo.png')
              : require('../../asset/images/nprimary.png')
          }
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onRightPress} style={styles.headerItem}>
        <Image
          style={[
            styles.icon,
            {marginRight: wp(2)},
            page == 'find'
              ? {height: hp(5), width: wp(18)}
              : page == 'bingo'
              ? {
                  height: hp(8),
                  width: hp(8),
                }
              : null,
          ]}
          source={
            page == 'find'
              ? require('../../asset/images/easy.png')
              : page == 'bingo'
              ? require('../../asset/images/hmbtnbingo.png')
              : require('../../asset/images/settings.png')
          }
          resizeMode="contain"
        />
      </TouchableOpacity>
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

  reapeate: {
    height: hp(9),
    width: hp(9),
  },
});
