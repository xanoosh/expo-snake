import React from 'react';
import { View } from 'react-native';
import SingleNavButton from './SingleNavButton';
import { NavButtonsStyle } from '../styles/Style';

const NavButtons = ({ directionsArray, onPress }) => {
  const ButtonsGroup = directionsArray.map((direction, index) => {
    return (
      <SingleNavButton key={index} direction={direction} onPress={onPress} />
    );
  });
  return <View style={NavButtonsStyle.buttonGroup}>{ButtonsGroup}</View>;
};

export default NavButtons;
