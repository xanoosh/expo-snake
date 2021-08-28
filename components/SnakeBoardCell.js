import React from 'react';
import { View } from 'react-native';
import { CellStyle } from '../styles/Style';

const SnakeBoardCell = ({ isActive, boardSquareSize }) => {
  const basisValue = `${100 / boardSquareSize}%`;
  return (
    <View
      style={
        isActive
          ? [CellStyle.cellActive, { flexBasis: basisValue }]
          : [CellStyle.cell, { flexBasis: basisValue }]
      }
    ></View>
  );
};

export default SnakeBoardCell;
