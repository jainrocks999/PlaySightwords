import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationParams} from '../../components/navigation';
import styles from './styles';
import {Image} from 'react-native-animatable';
import {heightPercent} from '../../utils/ResponsiveScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dbData, random} from '../../types';
import {useDispatch, useSelector} from 'react-redux';
import {rootState} from '../../redux';
import db from '../../utils/db';
import TrackPlayer from 'react-native-track-player';
type Props = StackScreenProps<StackNavigationParams, 'setting'>;
const Setting: React.FC<Props> = ({navigation}) => {
  const randomform = useSelector((state: rootState) => state.data.random);
  const backSound = useSelector((state: rootState) => state.data.backSound);
  const [random, setISRandom] = useState<random>();
  const [grad, setGrade] = useState<'tblWord' | 'tblWordG2' | ''>('');
  useEffect(() => {
    getGrade();
  }, []);
  const dispatch = useDispatch();
  console.log('this is backSOund', backSound);

  useEffect(() => {
    const handleBackButton = () => {
      let shouldBack = false;
      for (let key in backSound) {
        let validKey = key as keyof typeof backSound;

        if (backSound[validKey]) {
          dispatch({
            type: 'sightwords/backSound',
            payload: {...backSound, [key]: false},
          });
          shouldBack = true;
        }
      }

      if (shouldBack) {
        navigation.goBack();
        return true;
      }

      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );

    return () => {
      backHandler.remove();
    };
  }, [backSound, dispatch, navigation]);

  const getGrade = async () => {
    setISRandom(randomform);
    const grads = await AsyncStorage.getItem('grade');
    if (grads != null) {
      const validGrades: 'tblWord' | 'tblWordG2' = grads as
        | 'tblWord'
        | 'tblWordG2';
      setGrade(validGrades);
    }
  };
  const save = async () => {
    const dbData = await db(grad);
    dispatch({
      type: 'sightwords/getDataFromdb',
      payload: dbData,
    });
    dispatch({
      type: 'sightwords/setGrade',
      payload: grad,
    });

    await AsyncStorage.setItem('grade', grad);
    await AsyncStorage.setItem('random', JSON.stringify(random));
    let isGOBack = false;
    for (let key in backSound) {
      let validKey = key as keyof typeof backSound;
      if (backSound[validKey]) {
        dispatch({
          type: 'sightwords/backSound',
          payload: {...backSound, [key]: false},
        });
        isGOBack = true;
      }
    }
    if (isGOBack) {
      navigation.goBack();
    }
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../asset/images/stngbg.png')}
      style={styles.container}>
      <TouchableOpacity
        onPress={() => setGrade('tblWord')}
        style={styles.prePrimary}>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={
            grad == 'tblWord'
              ? require('../../asset/images/primarysekected.png')
              : require('../../asset/images/ppprimary.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setGrade('tblWordG2');
        }}
        style={[styles.prePrimary, {marginTop: heightPercent(4)}]}>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={
            grad == 'tblWordG2'
              ? require('../../asset/images/preprimaryselected.png')
              : require('../../asset/images/prepprimary.png')
          }
        />
      </TouchableOpacity>
      <View style={styles.randomContainer}>
        <Text style={[styles.random, {fontWeight: '500'}]}>Random</Text>
        <TouchableOpacity
          onPress={() => setISRandom(prev => ({random: !prev?.random}))}
          style={styles.bckImage}>
          <ImageBackground
            style={styles.image}
            source={require('../../asset/images/whtbtns.png')}>
            <Text style={styles.random}>{random?.random ? 'ON' : 'OFF'}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          save();
        }}
        style={styles.saveBtn}>
        <ImageBackground
          style={styles.image}
          source={require('../../asset/images/whtbtns.png')}>
          <Text style={styles.random}>{'SAVE'}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Setting;
