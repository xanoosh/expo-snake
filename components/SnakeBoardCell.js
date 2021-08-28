import React from 'react';
import { View } from 'react-native';
import { CellStyle } from '../styles/Style';

const SnakeBoardCell = ({ isActive, boardSquareSize }) => {
  return (
    <View
      style={
        isActive
          ? [CellStyle.cellActive, { flexBasis: '5%' }]
          : [CellStyle.cell, { flexBasis: '5%' }]
      }
    ></View>
  );
};

export default SnakeBoardCell;
