import { View, Text } from 'react-native';
import React from 'react';
import { CellStyle } from '../styles/Style';

const SnakeBoardCell = ({ positionX, positionY }) => {
  return (
    <View style={CellStyle.cell}>
      <Text>
        x {positionX}
        {positionY}
      </Text>
    </View>
  );
};

export default SnakeBoardCell;
