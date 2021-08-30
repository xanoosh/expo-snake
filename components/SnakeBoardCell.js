import React from 'react';
import { View } from 'react-native';
import { CellStyle } from '../styles/Style';

const SnakeBoardCell = ({ isActive, boardSquareSize, isFood }) => {
  const basisValue = `${100 / boardSquareSize}%`;
  const style = isActive
    ? [CellStyle.cellActive, { flexBasis: basisValue }]
    : [CellStyle.cell, { flexBasis: basisValue }];
  if (isFood) style.push(CellStyle.food);
  return <View style={style}></View>;
};

export default SnakeBoardCell;
