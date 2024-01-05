import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationParams} from '../../components/navigation';
import styles from './styles';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';
import type {rootState} from '../../redux';
import {FlatList} from 'react-native-gesture-handler';
import {widthPrecent as wp} from '../../utils/ResponsiveScreen';
import {dbData} from '../../types';
import {setupPlayer} from '../../utils/Setup';
import TrackPlayer, {AddTrack} from 'react-native-track-player';
import rightSound from '../../utils/rightSound';
import player from '../../utils/player';
import pickRandomOptions from '../../utils/randomotions';
type Props = StackScreenProps<StackNavigationParams, 'find'>;
const Find: React.FC<Props> = ({navigation}) => {
  const data = useSelector((state: rootState) => state.data.dbData);

  const [pickImage, setPickImage] = useState('');
  const [rightAns, setRightAns] = useState(-1);
  const [isHard, setIsHard] = useState(false);
  const [options, setOptions] = useState<dbData>(
    pickRandomOptions([...data], isHard ? 5 : 3),
  );
  const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const askQuestion = async (option: dbData) => {
    const rightIndex = Math.floor(Math.random() * 3);

    const sound_name = `_${option[rightIndex].Word}.mp3`;
    const sound = [
      {
        url: require('../../asset/sounds/clickon.mp3'), //`asset:/files/clickon.mp3`,
        title: option[rightIndex].Word,
        artist: 'eFlashApps',
        artwork: `asset:/files/${sound_name}`,
        duration: 0,
      },
      {
        url: `asset:/files/${sound_name}`,
        title: option[rightIndex].Word,
        artist: 'eFlashApps',
        artwork: `asset:/files/${sound_name}`,
        duration: 0,
      },
    ];
    setRightAns(rightIndex);
    const isSetup = await setupPlayer();
    if (isSetup) {
      await player(sound);
    }
  };

  const presseOption = async (index: number, array: dbData) => {
    let gunsoud = {
      url: require('../../asset/sounds/gun.mp3'), //`asset:/files/clickon.mp3`,
      title: 'gun',
      artist: 'eFlashApps',
      artwork: `asset:/files/gun.mp3`,
      duration: 0,
    };
    let strings = {
      url: require('../../asset/sounds/string.wav'), //`asset:/files/clickon.mp3`,
      title: 'gun',
      artist: 'eFlashApps',
      artwork: `asset:/files/string.wav`,
      duration: 0,
    };

    await player([gunsoud]);
    await delay(300);
    if (index == rightAns) {
      setPickImage(require('../../asset/images/bang.png'));
      await player(pickRandomOptions(rightSound, 5)[3]);
      await delay(3000);
      let remdomData = pickRandomOptions([...data], isHard ? 5 : 3);
      setOptions(remdomData);
      setPickImage('');
    } else {
      setPickImage(require('../../asset/images/cross.png'));
      await player([strings]);
      await delay(1200);
      setPickImage('');
    }
  };

  // useEffect(() => {
  //   askQuestion([...options]);
  // }, [options]);

  return (
    <ImageBackground
      source={require('../../asset/images/a5.png')}
      style={styles.container}
      resizeMode="stretch">
      <Header
        page="find"
        onLeftPress={() => {
          setOptions(pickRandomOptions([...data], !isHard ? 5 : 3));
          setIsHard(!isHard);
        }}
        onRightPress={() => {
          navigation.navigate('setting');
        }}
        onCenterPress={() => null}
      />
      <View style={styles.listContainer}>
        {pickImage != '' ? (
          <Image resizeMode="contain" style={styles.image} source={pickImage} />
        ) : null}
        <FlatList
          data={options}
          keyExtractor={item => item.ID.toString()}
          numColumns={2}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.somecontainer,
                {
                  top: index % 2 == 1 ? wp(20) : 0,
                  left: index % 2 == 0 ? wp(6) : 0,
                },
              ]}>
              <TouchableOpacity
                onPress={() => presseOption(index, [...options])}
                style={[styles.cloudContainer]}>
                <ImageBackground
                  style={styles.cloud}
                  resizeMode="stretch"
                  source={require('../../asset/images/whitecloud.png')}>
                  <Text style={styles.txt}>{item.Word}</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <Image
        style={styles.boy}
        resizeMode="contain"
        source={require('../../asset/images/boy2.png')}
      />
      <Image
        style={styles.home}
        resizeMode="contain"
        source={require('../../asset/images/hmbtn.png')}
      />
    </ImageBackground>
  );
};

export default Find;
