import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationParams} from '../../components/navigation';
type Props = StackScreenProps<StackNavigationParams, 'memory'>;
const Memory: React.FC<Props> = () => {
  return (
    <View>
      <Text>Memory</Text>
    </View>
  );
};

export default Memory;

const styles = StyleSheet.create({});
