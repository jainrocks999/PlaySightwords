import {View, Text} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationParams} from '../../components/navigation';
type Props = StackScreenProps<StackNavigationParams, 'setting'>;
const Setting: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};

export default Setting;
