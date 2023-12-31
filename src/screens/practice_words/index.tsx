import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationParams} from '../../components/navigation';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dbData, dbItem} from '../../types';
import {FlatList} from 'react-native-gesture-handler';
import player from '../../utils/player';
import resetPlayer from '../../utils/resetPlayer';
import {useDispatch} from 'react-redux';
type Props = StackScreenProps<StackNavigationParams, 'practice'>;
const Practice: React.FC<Props> = ({navigation}) => {
  const [grade, setGrade] = useState('gradeA');
  const [data, setData] = useState<dbData>();
  useEffect(() => {
    getDataWithGrade('gradeA');
  }, []);
  const getDataWithGrade = async (type: string) => {
    console.log(type);

    const getData = await AsyncStorage.getItem(type);
    let validData;
    if (getData != null) {
      validData = (await JSON.parse(getData)) as dbData;
      setData(validData);
    } else {
      setData([] as dbData);
    }
    setGrade(type);
  };
  const play = async (item: dbItem) => {
    const music = {
      url: `asset:/files/_${item?.Word}.mp3`,
      title: item.Word,
      artist: 'eFlashApps',
      artwork: `asset:/files/_${item?.Word}.mp3`,
      duration: 0,
    };
    await player([music]);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const handleBackButton = () => {
      resetPlayer();
      dispatch({
        type: 'sightwords/resetbackSound',
      });
      navigation.reset({index: 0, routes: [{name: 'home'}]});
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );

    return () => {
      backHandler.remove();
    };
  }, []);
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../asset/images/pwbg.png')}
      style={styles.container}>
      <View style={styles.practiImg2}>
        <Image
          style={styles.img}
          resizeMode="contain"
          source={require('../../asset/images/practiceWord.png')}
        />
      </View>
      <View style={styles.practiImg}>
        <Image
          style={styles.img}
          resizeMode="contain"
          source={require('../../asset/images/julypractice.png')}
        />
      </View>
      <View style={styles.prePrimary}>
        <TouchableOpacity
          onPress={() => {
            getDataWithGrade('gradeA');
          }}
          style={styles.prePrimaryBtn}>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={
              grade == 'gradeA'
                ? require('../../asset/images/primarysekected.png')
                : require('../../asset/images/ppprimary.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            getDataWithGrade('gradeB');
          }}
          style={styles.prePrimaryBtn}>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={
              grade == 'gradeB'
                ? require('../../asset/images/preprimaryselected.png')
                : require('../../asset/images/prepprimary.png')
            }
          />
        </TouchableOpacity>
      </View>
      {data && data?.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            keyExtractor={item => item.ID.toString()}
            renderItem={({item, index}) => (
              <View style={styles.list}>
                <Text style={styles.listtxt}>{item.Word}</Text>
                <TouchableOpacity
                  onPress={() => play(item)}
                  style={styles.adioBtn}>
                  <Image
                    style={styles.img}
                    resizeMode="contain"
                    source={require('../../asset/images/speaker01.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      ) : null}
    </ImageBackground>
  );
};

export default Practice;
