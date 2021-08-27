import React from 'react';
import { View } from 'react-native';
import { BoardStyle } from '../styles/Style';

import SnakeBoardCell from './SnakeBoardCell.js';
const SnakeBoard = ({ width, height }) => {
  const boardMap = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) boardMap.push({ y: i, x: j });
  }
  const BoardCells = boardMap.map((boardEl, i) => (
    <SnakeBoardCell key={i} positionX={boardEl.x} positionY={boardEl.y} />
  ));
  return <View style={BoardStyle.board}>{BoardCells}</View>;
};

export default SnakeBoard;
