import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../utils/ResponsiveScreen';
import {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationParams} from '../../components/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
type Props = StackScreenProps<StackNavigationParams, 'splash'>;
const Splash: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getIntialPage();
    }, 2000);
  }, []);
  const getIntialPage = async () => {
    const grade = await AsyncStorage.getItem('grade');
    navigation.reset({
      index: 0,
      routes: [{name: grade == null ? 'grade' : 'home'}],
    });
  };
  return (
    <View style={{flex: 1}}>
      <Image
        style={{height: hp(100), width: wp(100)}}
        source={require('../../asset/images/splashscreen.png')}
      />
    </View>
  );
};

export default Splash;
