import {View, Text} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationParams} from '../../components/navigation';
type Props = StackScreenProps<StackNavigationParams, 'practice'>;
const Practice: React.FC<Props> = () => {
  return (
    <View>
      <Text>Practice:React.FC</Text>
    </View>
  );
};

export default Practice;
