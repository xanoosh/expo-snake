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
  const [snakeTimeout, setSnakeTimeout] = useState();

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

  //main game loop (setTimeout)

  // var myFunction = function () {
  //   counter *= 10;
  //   setTimeout(myFunction, counter);
  // };
  // setTimeout(myFunction, counter);
  const gameLoop = () => {
    // setSnakeTimeout(clearTimeout(snakeTimeout));
    let newSnakeHead = getNewSnakeHeadPosition(
      snakePosition[0],
      snakeDirection,
      boardSquareSize
    );
    move(newSnakeHead, setSnakePosition);
    // if (isFoodEaten(foodPosition, newSnakeHead)) {
    //   digest(newSnakeHead, setSnakePosition);
    //   newSnakeHead = getNewSnakeHeadPosition(
    //     snakePosition[0],
    //     snakeDirection,
    //     boardSquareSize
    //   );
    //   getFoodPosition(snakePosition, boardSquareSize, setFoodPosition);
    //   setSnakeSpeed((prev) => prev - 5);
    // } else move(newSnakeHead, setSnakePosition);
    // on speed change:
    setSnakeTimeout(setTimeout(gameLoop, snakeSpeed));
  };

  useEffect(() => {
    getFoodPosition(snakePosition, boardSquareSize, setFoodPosition);
  }, []);

  useEffect(() => {
    // if (gameOn) requestAnimationFrame(gameLoop);
    if (gameOn) setSnakeTimeout(setTimeout(gameLoop, snakeSpeed));
    if (!gameOn) setSnakeTimeout(clearTimeout(gameLoop, snakeTimeout));
  }, [gameOn]);

  // useEffect(() => {
  //   requestAnimationFrame(gameLoop);
  // }, [currentTimeStamp]);

  return (
    <View style={mainStyle.container}>
      <TimeStampData
        last={lastTimeStamp}
        current={currentTimeStamp}
        timeout={snakeTimeout}
      />

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
