import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { mainStyle } from './styles/Style';
import SnakeBoard from './components/SnakeBoard';

export default function App() {
  const boardSquareSize = 10;
  const [snakePosition, setSnakePosition] = useState([
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
  ]);
  // gonna need below states when some kind of loop will be implemented
  //(preferrably requestAnimationFrame)
  const [snakeDirection, setSnakeDirection] = useState('left');
  const [snakeSpeed, setSnakeSpeed] = useState(3); //3 moves per second
  //food state:
  // const [snakeFoodPosition, setSnakeFoodPosition] = useState({ x: 10, y: 2 });
  // const [snakeAteFood, setSnakeAteFood] = useState(false);

  //check time in miliseconds:
  let lastTimeStamp = 0;
  const updateFrame = (timeStamp) => {
    if (timeStamp - lastTimeStamp >= 1000 / snakeSpeed) {
      lastTimeStamp = timeStamp;
      return true;
    }
    return false;
  };
  const gameLoop = (timeStamp) => {
    if (updateFrame(timeStamp)) {
      move();
    }
    //some condition for end
    requestAnimationFrame(gameLoop);
  };

  //calculate starting snake position on mount:
  useEffect(() => {
    // (async () => {
    //   await setSnakePosition(() => {
    //     return [
    //       {
    //         x: Math.round(boardSquareSize / 2),
    //         y: Math.round(boardSquareSize / 2) - 1,
    //       },
    //       {
    //         x: Math.round(boardSquareSize / 2),
    //         y: Math.round(boardSquareSize / 2),
    //       },
    //       {
    //         x: Math.round(boardSquareSize / 2),
    //         y: Math.round(boardSquareSize / 2) + 1,
    //       },
    //     ];
    //   }).then(requestAnimationFrame(gameLoop));
    //   //start loop?
    // })();
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
      {snakePosition.length !== 0 ? (
        <SnakeBoard
          boardSquareSize={boardSquareSize}
          getSnakePosition={snakePosition}
        />
      ) : (
        <Text>Loading..</Text>
      )}
      <View style={mainStyle.buttonGroup}>
        <Pressable
          style={[mainStyle.buttonUp, mainStyle.button]}
          onPress={() => move('up')}
        >
          <View style={mainStyle.arrowUp}></View>
        </Pressable>
        <Pressable
          style={[mainStyle.buttonDown, mainStyle.button]}
          onPress={() => move('down')}
        >
          <View style={mainStyle.arrowDown}></View>
        </Pressable>
        <Pressable
          style={[mainStyle.buttonLeft, mainStyle.button]}
          onPress={() => move('left')}
        >
          <View style={mainStyle.arrowLeft}></View>
        </Pressable>
        <Pressable
          style={[mainStyle.buttonRight, mainStyle.button]}
          onPress={() => move('right')}
        >
          <View style={mainStyle.arrowRight}></View>
        </Pressable>
        <Pressable
          style={[mainStyle.buttonPlayPause]}
          onPress={() => requestAnimationFrame(gameLoop)}
        >
          <Text style={mainStyle.buttonPlayPauseText}>Play</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
