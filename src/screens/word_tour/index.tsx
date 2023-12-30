import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import type {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationParams} from '../../components/navigation';
import Header from './header';
import {widthPrecent as wp} from '../../utils/ResponsiveScreen';
import {useSelector} from 'react-redux';
import {rootState} from '../../redux';
import TrackPlayer from 'react-native-track-player';
import {setupPlayer} from '../../utils/Setup';
type Props = StackScreenProps<StackNavigationParams, 'word'>;
type music = {
  url: string;
  title: string;
  artist: string;
  artwork: string;
  duration: number;
};
const Word: React.FC<Props> = ({navigation}) => {
  const data = useSelector((state: rootState) => state.data.dbData);
  const [count, setCount] = useState(0);
  const [words, setWords] = useState(data[0].Word);
  const [music, setMusic] = useState<music[]>([]);
  const [timeouts, setTimeouts] = useState<any[]>([]);
  useEffect(() => {
    showData();
  }, [count]);
  const clearAllTimeouts = () => {
    timeouts.forEach((timeoutId: any) => clearTimeout(timeoutId));
    setTimeouts([]);
  };
  const playsound = async (arr: music[], characters: string[]) => {
    await TrackPlayer.reset();
    await TrackPlayer.add([arr[0]]);
    await TrackPlayer.play();
    await delay(1700);
    await TrackPlayer.reset();
    await TrackPlayer.add([arr[1]]);
    await TrackPlayer.play();
    clearAllTimeouts();
    let wordToShow = '';
    const newTimeouts: any[] = [];
    for (let i = 0; i < characters.length; i++) {
      const timeoutId = setTimeout(() => {
        wordToShow += characters[i];
        setWords(wordToShow);
      }, i * 1000);
      newTimeouts.push(timeoutId);
    }
    setTimeouts(newTimeouts);
  };
  const showData = async () => {
    try {
      clearAllTimeouts();
      const isSetup = await setupPlayer();
      const word = data[count].Word;
      const music_name = `_${word}.mp3`;
      const speling_name = `_${word}_spelled.mp3`;
      const music = {
        url: `asset:/files/${music_name}`,
        title: word,
        artist: 'eFlashApps',
        artwork: `asset:/files/${music_name}`,
        duration: 0,
      };
      const spelling = {
        url: `asset:/files/${speling_name}`,
        title: word,
        artist: 'eFlashApps',
        artwork: `asset:/files/${speling_name}`,
        duration: 0,
      };
      const arr = [music, spelling];
      setMusic(arr);
      setWords(word);
      if (isSetup) {
        playsound(arr, [...word]);
      }
    } catch (error) {
      console.error('Error in showData:', error);
    }
  };

  const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  return (
    <ImageBackground
      source={
        count % 2 == 0
          ? require('../../asset/images/a6.png')
          : require('../../asset/images/a4.png')
      }
      style={styles.container}
      resizeMode="stretch">
      <Header />
      <View style={styles.textContainer}>
        <Text style={styles.txt}>{words}</Text>
        <Text
          style={[
            {
              fontSize: wp(5),
              position: 'absolute',
              bottom: 0,
              color: 'black',
              fontStyle: 'italic',
              fontWeight: '500',
            },
          ]}>
          {`${count + 1}/${data.length}`}
        </Text>
      </View>

      <View style={styles.btncontainer}>
        <TouchableOpacity
          onPress={() => {
            setCount(count - 1);
          }}
          disabled={count == 0 ? true : false}
          style={styles.singleBtncontainer}>
          <Image
            style={styles.btn}
            resizeMode="contain"
            source={require('../../asset/images/lftbtn.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            playsound(music, [...words]);
          }}
          style={styles.singleBtncontainer2}>
          <Image
            style={styles.btn}
            resizeMode="contain"
            source={require('../../asset/images/repeat.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
            clearAllTimeouts();
          }}
          disabled={count + 1 == data.length ? true : false}
          style={styles.singleBtncontainer}>
          <Image
            style={styles.btn}
            resizeMode="contain"
            source={require('../../asset/images/rightbtn.png')}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.homeIcone}
        resizeMode="contain"
        source={require('../../asset/images/hmbtn.png')}
      />
    </ImageBackground>
  );
};

export default Word;
