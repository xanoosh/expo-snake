import React from 'react';
import { Text } from 'react-native';

const TimeStampData = ({ last, current, timeout, newSnakeHead }) => {
  return (
    <>
      <Text>lastTimeStamp:</Text>
      <Text style={{ fontWeight: 'bold' }}>{last}</Text>
      <Text>currentTimeStamp:</Text>
      <Text style={{ fontWeight: 'bold' }}>{current}</Text>
      <Text style={{ fontWeight: 'bold' }}>
        timeout: {timeout ? timeout : 'none'}
      </Text>
      <Text style={{ fontWeight: 'bold' }}>
        newSnakeHead: x:{newSnakeHead?.x} y:{newSnakeHead?.y}
      </Text>
    </>
  );
};

export default TimeStampData;
