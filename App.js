import { StatusBar } from 'expo-status-bar';
import { mainStyle } from './styles/Style';
import React from 'react';
import { Text, View } from 'react-native';

import SnakeBoard from './components/SnakeBoard';

export default function App() {
  return (
    <View style={mainStyle.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <SnakeBoard width={10} height={10} />
      <StatusBar style="auto" />
    </View>
  );
}
