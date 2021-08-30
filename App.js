import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { mainStyle } from './styles/Style';
import SnakeBoard from './components/SnakeBoard';
import NavButtons from './components/NavButtons';

export default function App() {
  const boardSquareSize = 16;
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
  const [snakeDirection, setSnakeDirection] = useState('up');
  const [gameOn, setGameOn] = useState(false);
  const [snakeSpeed, setSnakeSpeed] = useState(30); //moves per second
  const [lastTimeStamp, setLastTimeStamp] = useState(0);
  const [currentTimeStamp, setCurrentTimeStamp] = useState(0);
  //food state:
  // const [snakeFoodPosition, setSnakeFoodPosition] = useState({ x: 10, y: 2 });
  // const [snakeAteFood, setSnakeAteFood] = useState(false);

  //check time in miliseconds:
  // let lastTimeStamp = 0;
  const updateFrame = (timeStamp) => {
    if (currentTimeStamp - lastTimeStamp >= 1000 / snakeSpeed) {
      // lastTimeStamp = timeStamp;
      setLastTimeStamp(timeStamp);
      return true;
    }
    return false;
  };
  const gameLoop = (timeStamp) => {
    if (gameOn) {
      if (updateFrame(timeStamp)) {
        move(snakeDirection);
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
      <Text>lastTimeStamp:</Text>
      <Text style={{ fontWeight: 'bold' }}>{lastTimeStamp}</Text>
      <Text>currentTimeStamp:</Text>
      <Text style={{ fontWeight: 'bold' }}>{currentTimeStamp}</Text>

      <SnakeBoard
        boardSquareSize={boardSquareSize}
        getSnakePosition={snakePosition}
      />

      <NavButtons
        directionsArray={['up', 'down', 'left', 'right']}
        onPress={setSnakeDirection}
      />

      {/* playpause */}
      <Pressable
        style={[mainStyle.buttonPlayPause]}
        onPress={() => {
          if (!gameOn) {
            setGameOn(true);
            requestAnimationFrame(gameLoop);
          }
          if (gameOn) {
            setGameOn(false);
            cancelAnimationFrame(gameLoop);
          }
        }}
      >
        <Text style={mainStyle.buttonPlayPauseText}>
          {gameOn ? 'Pause' : 'Play'}
        </Text>
      </Pressable>
    </View>
  );
}
