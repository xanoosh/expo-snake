import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useState, useEffect, useMemo } from 'react';
import { mainStyle } from './styles/Style';
import SnakeBoard from './components/SnakeBoard';
import NavButtons from './components/NavButtons';
import TimeStampData from './components/TimeStampData';
import {
  updateFrame,
  getNewSnakeHeadPosition,
  move,
  calcStartingPosition,
} from './components/functions/SnakeFunctions';
import {
  getFoodPosition,
  isFoodEaten,
  digest,
} from './components/functions/FoodFunctions';

export default function App() {
  const boardSquareSize = 21;
  const [snakePosition, setSnakePosition] = useState(
    calcStartingPosition(boardSquareSize)
  );
  const [snakeDirection, setSnakeDirection] = useState('up');
  const [gameOn, setGameOn] = useState(false);
  const [snakeSpeed, setSnakeSpeed] = useState(20); //moves per second
  const [lastTimeStamp, setLastTimeStamp] = useState(0);
  const [currentTimeStamp, setCurrentTimeStamp] = useState(0);
  const [foodPosition, setFoodPosition] = useState();
  const [snakeInterval, setSnakeInterval] = useState();

  // main game loop (animationFrame):
  // const gameLoop = (timeStamp) => {
  //   if (gameOn) {
  //     if (updateFrame(currentTimeStamp, lastTimeStamp, snakeSpeed)) {
  //       setLastTimeStamp(timeStamp);
  //       let newSnakeHead = getNewSnakeHeadPosition(
  //         snakePosition[0],
  //         snakeDirection,
  //         boardSquareSize
  //       );
  //       if (isFoodEaten(foodPosition, newSnakeHead)) {
  //         digest(newSnakeHead, setSnakePosition);
  //         newSnakeHead = getNewSnakeHeadPosition(
  //           snakePosition[0],
  //           snakeDirection,
  //           boardSquareSize
  //         );
  //         getFoodPosition(snakePosition, boardSquareSize, setFoodPosition);
  //         setSnakeSpeed((prev) => prev - 5);
  //       } else move(newSnakeHead, setSnakePosition);
  //     }
  //     setCurrentTimeStamp(timeStamp);
  //   }
  // };

  //main game loop (setinterval)
  const gameLoop = () => {
    setLastTimeStamp(timeStamp);
    let newSnakeHead = getNewSnakeHeadPosition(
      snakePosition[0],
      snakeDirection,
      boardSquareSize
    );
    if (isFoodEaten(foodPosition, newSnakeHead)) {
      digest(newSnakeHead, setSnakePosition);
      newSnakeHead = getNewSnakeHeadPosition(
        snakePosition[0],
        snakeDirection,
        boardSquareSize
      );
      getFoodPosition(snakePosition, boardSquareSize, setFoodPosition);
      setSnakeSpeed((prev) => prev - 5);
    } else move(newSnakeHead, setSnakePosition);
  };

  useEffect(() => {
    getFoodPosition(snakePosition, boardSquareSize, setFoodPosition);
  }, []);

  useEffect(() => {
    // if (gameOn) requestAnimationFrame(gameLoop);
    if (gameOn) setSnakeInterval(setInterval(gameLoop, snakeSpeed));
    if (!gameOn) setSnakeInterval(clearInterval(snakeInterval));
  }, [gameOn]);

  // useEffect(() => {
  //   requestAnimationFrame(gameLoop);
  // }, [currentTimeStamp]);

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
