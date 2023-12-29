import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../utils/ResponsiveScreen';
import {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationParams} from '../../components/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = StackScreenProps<StackNavigationParams, 'grade'>;
const Grade: React.FC<Props> = ({navigation}) => {
  const getGrade = async (type: string) => {
    await AsyncStorage.setItem('grade', type);
    navigation.reset({index: 0, routes: [{name: 'home'}]});
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.container}
        source={require('../../asset/images/a3.png')}
        resizeMode="stretch">
        <TouchableOpacity
          onPress={() => {
            getGrade('tblWord');
          }}
          style={[styles.card, {marginTop: hp(15), marginRight: wp(10)}]}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('../../asset/images/preprimary.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            getGrade('tblWordG2');
          }}
          style={[styles.card, {marginLeft: wp(10), marginTop: 5}]}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('../../asset/images/primary.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Grade;

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    width: wp(100),
    alignItems: 'center',
  },
  card: {
    height: hp(14),
    width: wp(50),
  },
});
