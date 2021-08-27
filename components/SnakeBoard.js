import { View } from 'react-native';
import SnakeBoardCell from './SnakeBoardCell';
const SnakeBoard = ({ width, height }) => {
  const BoardCells = height.forEach((row, rowIndex) => {
    width.map((cell, cellIndex) => {
      <SnakeBoardCell
        key={rowIndex + cellIndex}
        positionY={rowIndex}
        positionX={cellIndex}
      />;
    });
  });
  return <View></View>;
};

export default SnakeBoard;
