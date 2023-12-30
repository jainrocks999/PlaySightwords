import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import homedata from '../../utils/homedata';
import {useSelector} from 'react-redux';
import type {rootState} from '../../redux';
import type {StackScreenProps} from '@react-navigation/stack';
import type {StackNavigationParams} from '../../components/navigation';
type Props = StackScreenProps<StackNavigationParams, 'home'>;
const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backImage}
        source={require('../../asset/images/newmainbg.png')}
        resizeMode="stretch">
        <Header />
        <View style={styles.imagescontainer}>
          <FlatList
            data={homedata}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('word')}
                style={styles.listImage}>
                <Image
                  style={styles.image}
                  source={item.path}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.bottumImage}>
          <Image
            style={styles.image}
            source={require('../../asset/images/eflashappipad.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
