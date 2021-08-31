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
  randomFoodPosition,
  getFoodPosition,
  isFoodEaten,
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
  const [foodPosition, setFoodPosition] = useState();
  // const [snakeAteFood, setSnakeAteFood] = useState(false);

  //main game loop:
  const gameLoop = (timeStamp) => {
    if (gameOn) {
      if (updateFrame(currentTimeStamp, lastTimeStamp, snakeSpeed)) {
        setLastTimeStamp(timeStamp);
        move(snakeDirection, boardSquareSize, setSnakePosition);
        if (isFoodEaten(foodPosition, snakePosition[0])) {
          getFoodPosition(snakePosition, boardSquareSize, setFoodPosition);
        }
      }
      setCurrentTimeStamp(timeStamp);
    }
  };

  useEffect(() => {
    getFoodPosition(snakePosition, boardSquareSize, setFoodPosition);
  }, []);

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
        foodPosition={foodPosition}
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
