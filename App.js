import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { mainStyle } from './styles/Style';
import SnakeBoard from './components/SnakeBoard';

export default function App() {
  const [snakePosition, setSnakePosition] = useState([
    { x: 10, y: 9 },
    { x: 10, y: 10 },
    { x: 10, y: 11 },
  ]);
  const [snakeDirection, setSnakeDirection] = useState('up');

  //move snake function (update snake position):
  const move = () => {
    if (snakeDirection === 'up') {
      setSnakePosition((prev) => {
        return (newPosition = [...prev].map((el) => ({
          x: el.x,
          y: el.y - 1,
        })));
      });
    }
  };
  return (
    <View style={mainStyle.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>
        Snake board below:
      </Text>
      <SnakeBoard width={20} height={20} getSnakePosition={snakePosition} />

      <Pressable onPress={() => move()}>
        <Text>Move</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
