import {View, Text} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationParams} from '../../components/navigation';
type Props = StackScreenProps<StackNavigationParams, 'find'>;
const Find: React.FC<Props> = () => {
  return (
    <View>
      <Text>Find:React.FC</Text>
    </View>
  );
};

export default Find;
