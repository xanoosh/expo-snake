import React from 'react';
import { Text } from 'react-native';

const TimeStampData = ({ last, current }) => {
  return (
    <>
      <Text>lastTimeStamp:</Text>
      <Text style={{ fontWeight: 'bold' }}>{last}</Text>
      <Text>currentTimeStamp:</Text>
      <Text style={{ fontWeight: 'bold' }}>{current}</Text>
    </>
  );
};

export default TimeStampData;
