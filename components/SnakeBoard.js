import React from 'react';
import { View } from 'react-native';

import { BoardStyle } from '../styles/Style';
import SnakeBoardCell from './SnakeBoardCell.js';

const SnakeBoard = ({ width, height, getSnakePosition }) => {
  //build board array:
  const boardMap = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) boardMap.push({ y: i, x: j });
  }
  //snake position checker:
  const isSnakePosition = (elX, elY) => {
    let result = false;
    getSnakePosition.forEach((snakeElPos) => {
      if (snakeElPos.x === elX && snakeElPos.y === elY) result = true;
    });
    return result;
  };
  //map cell components based on board array:
  const BoardCells = boardMap.map((boardEl, i) => (
    <SnakeBoardCell
      key={i}
      positionX={boardEl.x}
      positionY={boardEl.y}
      isActive={isSnakePosition(boardEl.x, boardEl.y)}
    />
  ));
  return <View style={BoardStyle.board}>{BoardCells}</View>;
};

export default SnakeBoard;
