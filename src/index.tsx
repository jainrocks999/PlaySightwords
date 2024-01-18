import {LogBox, StatusBar, View} from 'react-native';
import React from 'react';
import Navigation from './components/navigation';
import {Provider} from 'react-redux';
import {sightStore} from './redux';
const Root = () => {
  LogBox.ignoreAllLogs();
  return (
    <View style={{flex: 1}}>
      <Provider store={sightStore}>
        <StatusBar backgroundColor="#75d5f4" />
        <Navigation />
      </Provider>
    </View>
  );
};

export default Root;
