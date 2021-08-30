import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { mainStyle } from './styles/Style';
import SnakeBoard from './components/SnakeBoard';
import NavButtons from './components/NavButtons';
import TimeStampData from './components/TimeStampData';

import {
  updateFrame,
  move,
  calcStartingPosition,
} from './components/Functions';

export default function App() {
  const boardSquareSize = 15;
  const [snakePosition, setSnakePosition] = useState(
    calcStartingPosition(boardSquareSize)
  );
  const [snakeDirection, setSnakeDirection] = useState('up');
  const [gameOn, setGameOn] = useState(false);
  const [snakeSpeed, setSnakeSpeed] = useState(5); //moves per second
  const [lastTimeStamp, setLastTimeStamp] = useState(0);
  const [currentTimeStamp, setCurrentTimeStamp] = useState(0);
  //food state:
  // const [snakeFoodPosition, setSnakeFoodPosition] = useState({ x: 10, y: 2 });
  // const [snakeAteFood, setSnakeAteFood] = useState(false);

  //main game loop:
  const gameLoop = (timeStamp) => {
    if (gameOn) {
      if (updateFrame(currentTimeStamp, lastTimeStamp, snakeSpeed)) {
        setLastTimeStamp(timeStamp);
        move(snakeDirection, boardSquareSize, setSnakePosition);
      }
      setCurrentTimeStamp(timeStamp);
    }
  };

  useEffect(() => {
    if (gameOn) requestAnimationFrame(gameLoop);
  }, [gameOn]);

  useEffect(() => {
    requestAnimationFrame(gameLoop);
  }, [currentTimeStamp]);

  return (
    <View style={mainStyle.container}>
      <TimeStampData last={lastTimeStamp} current={currentTimeStamp} />

      <SnakeBoard
        boardSquareSize={boardSquareSize}
        getSnakePosition={snakePosition}
      />

      <NavButtons
        directionsArray={['up', 'down', 'left', 'right']}
        onPress={setSnakeDirection}
      />

      <Pressable
        style={[mainStyle.buttonPlayPause]}
        onPress={() => setGameOn(!gameOn)}
      >
        <Text style={mainStyle.buttonPlayPauseText}>
          {gameOn ? 'Pause' : 'Play'}
        </Text>
      </Pressable>
    </View>
  );
}
