import React from 'react';
import { View } from 'react-native';
import { CellStyle } from '../styles/Style';

const SnakeBoardCell = ({ positionX, positionY, isActive }) => {
  return (
    <View style={isActive ? CellStyle.cellActive : CellStyle.cell}>
      {/* <Text>
        x {positionX}
        {positionY}
      </Text> */}
    </View>
  );
};

export default SnakeBoardCell;
