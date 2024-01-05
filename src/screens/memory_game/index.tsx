import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationParams} from '../../components/navigation';
import styles from './styles';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';
import {rootState} from '../../redux';
import {FlatList} from 'react-native-gesture-handler';
import {dbData, dbItem} from '../../types';
import player from '../../utils/player';
import rightSound from '../../utils/rightSound';
import pickRandomOptions from '../../utils/randomotions';
type Props = StackScreenProps<StackNavigationParams, 'memory'>;

const Memory: React.FC<Props> = ({navigation}) => {
  const data = useSelector((state: rootState) => state.data.dbData);
  console.log('thiss is from ', JSON.stringify(data));

  const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const createDuplicate = (array: dbData) => {
    const duplicateArray = array.flatMap(item => [item, item]);

    return duplicateArray;
  };

  const [options, setOptions] = useState<dbData>(
    pickRandomOptions(createDuplicate([...pickRandomOptions([...data], 3)]), 6),
  );
  const [selected, setSelected] = useState<dbItem>();
  const [selectedeIndex, setSelectedIndex] = useState<number[]>([]);
  const [righIndex, setRinghtIndex] = useState<number[]>([]);
  const [cloud, setCloud] = useState<number[]>([]);
  const praisedItem = async (
    item: dbItem,
    index: number,
    prevArray: number[],
  ) => {
    const music = {
      url: `asset:/files/_${item.Word}.mp3`,
      title: item.Word,
      artist: 'eFlashApps',
      artwork: `asset:/files/_${item.Word}.mp3`,
      duration: 0,
    };

    setSelectedIndex([index]);
    setSelected(item);
    if (cloud.length < 2) {
      setCloud([...cloud, index]);
    }

    if (selected?.ID == item.ID) {
      if ([...righIndex, index, ...prevArray].length >= 6) {
        player([rightSound[6]]);
        await delay(2000);
        let random = pickRandomOptions(
          createDuplicate([...pickRandomOptions([...data], 3)]),
          6,
        );
        setOptions(random);
        setRinghtIndex([]);
        setSelectedIndex([]);
        setCloud([]);
      } else {
        const right = pickRandomOptions(rightSound, 1);
        await player(right);
        await delay(500);
        setCloud([]);
        setRinghtIndex([...righIndex, index, ...prevArray]);
        setSelected({} as dbItem);
        setSelectedIndex([]);
      }
    } else {
      await player([music]);
      if ([...cloud, index].length >= 2) {
        await delay(500);
        setCloud([]);
        setSelected({} as dbItem);
      }
    }
  };
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="stretch"
      source={require('../../asset/images/a1.png')}>
      <Header
        page="find"
        onLeftPress={() => {
          navigation.navigate('setting');
        }}
        onRightPress={() => {
          Alert.alert('something');
        }}
        onCenterPress={() => {
          null;
        }}
      />
      <View style={styles.cardContainer}>
        <FlatList
          data={options}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => praisedItem(item, index, selectedeIndex)}
              disabled={
                selectedeIndex.includes(index) || righIndex.includes(index)
              }
              style={styles.card}>
              {!righIndex.includes(index) ? (
                <>
                  {!cloud.includes(index) ? (
                    <Image
                      resizeMode="contain"
                      source={require('../../asset/images/cloudsmall.png')}
                      style={styles.optionImage}
                    />
                  ) : null}

                  <Text
                    style={[
                      styles.txt,
                      {color: righIndex.includes(index) ? 'blue' : 'black'},
                    ]}>
                    {item.Word}
                  </Text>
                </>
              ) : null}
            </TouchableOpacity>
          )}
        />
      </View>

      <Image
        style={styles.home}
        resizeMode="contain"
        source={require('../../asset/images/hmbtn.png')}
      />
    </ImageBackground>
  );
};

export default Memory;
