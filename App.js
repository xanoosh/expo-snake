import { StatusBar } from 'expo-status-bar';
import { mainStyles } from './styles/Styles';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={mainStyles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <StatusBar style="auto" />
    </View>
  );
}
