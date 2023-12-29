import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backImage}
        source={require('../../asset/images/newmainbg.png')}
        resizeMode="repeat">
        <Header />
      </ImageBackground>
    </View>
  );
};

export default Home;
