import React from 'react';
import { Text } from 'react-native';

const TimeStampData = ({ last, current, timeout }) => {
  return (
    <>
      <Text>lastTimeStamp:</Text>
      <Text style={{ fontWeight: 'bold' }}>{last}</Text>
      <Text>currentTimeStamp:</Text>
      <Text style={{ fontWeight: 'bold' }}>{current}</Text>
      <Text style={{ fontWeight: 'bold' }}>
        timeout: {timeout ? timeout : 'none'}
      </Text>
    </>
  );
};

export default TimeStampData;
