import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { mainStyle } from './styles/Style';
import SnakeBoard from './components/SnakeBoard';

export default function App() {
  const boardSquareSize = 20;
  const [snakePosition, setSnakePosition] = useState([]);
  // gonna need below states when some kind of loop will be implemented
  //(preferrably requestAnimationFrame)
  // const [snakeDirection, setSnakeDirection] = useState('left');
  // const [snakeSpeed, setSnakeSpeed] = useState(1);
  //food state:
  // const [snakeFoodPosition, setSnakeFoodPosition] = useState({ x: 10, y: 2 });
  // const [snakeAteFood, setSnakeAteFood] = useState(false);
  //calcualte starting snake position on mount:
  useEffect(() => {
    setSnakePosition(() => {
      return [
        {
          x: Math.round(boardSquareSize / 2),
          y: Math.round(boardSquareSize / 2) - 1,
        },
        {
          x: Math.round(boardSquareSize / 2),
          y: Math.round(boardSquareSize / 2),
        },
        {
          x: Math.round(boardSquareSize / 2),
          y: Math.round(boardSquareSize / 2) + 1,
        },
      ];
    });
  }, []);
  //move snake function (update snake position):
  const move = (snakeDirection) => {
    setSnakePosition((prev) => {
      const max = Math.floor(boardSquareSize) - 1;
      const newPosition = [...prev].map((el, i) => {
        if (i === 0) {
          if (snakeDirection === 'up') {
            return { x: el.x, y: el.y === 0 ? max : el.y - 1 };
          }
          if (snakeDirection === 'down') {
            return { x: el.x, y: el.y === max ? 0 : el.y + 1 };
          }
          if (snakeDirection === 'left') {
            return { x: el.x === 0 ? max : el.x - 1, y: el.y };
          }
          if (snakeDirection === 'right') {
            return { x: el.x === max ? 0 : el.x + 1, y: el.y };
          }
        }
        if (i !== 0) return prev[i - 1];
      });
      return newPosition;
    });
  };
  return (
    <View style={mainStyle.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>
        Snake board below:
      </Text>
      <SnakeBoard
        boardSquareSize={boardSquareSize}
        getSnakePosition={snakePosition}
      />
      <View style={mainStyle.buttonGroup}>
        <Pressable style={mainStyle.buttonUp} onPress={() => move('up')}>
          <Text style={mainStyle.buttonText}>up</Text>
        </Pressable>
        <Pressable style={mainStyle.buttonDown} onPress={() => move('down')}>
          <Text style={mainStyle.buttonText}>down</Text>
        </Pressable>
        <Pressable style={mainStyle.buttonLeft} onPress={() => move('left')}>
          <Text style={mainStyle.buttonText}>left</Text>
        </Pressable>
        <Pressable style={mainStyle.buttonRight} onPress={() => move('right')}>
          <Text style={mainStyle.buttonText}>right</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
