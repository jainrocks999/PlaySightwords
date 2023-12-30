import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationParams} from '../../components/navigation';
type Props = StackScreenProps<StackNavigationParams, 'bingo'>;
const Bingo: React.FC<Props> = () => {
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default Bingo;

const styles = StyleSheet.create({});
