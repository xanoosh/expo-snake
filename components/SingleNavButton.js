import React from 'react';
import { View, Pressable } from 'react-native';
import { NavButtonsStyle } from '../styles/Style';

const SingleNavButton = ({ direction, onPress }) => {
  let styleBtn;
  let styleArrow;
  if (direction === 'up') {
    styleBtn = [NavButtonsStyle.button, NavButtonsStyle.buttonUp];
    styleArrow = NavButtonsStyle.arrowUp;
  }
  if (direction === 'down') {
    styleBtn = [NavButtonsStyle.button, NavButtonsStyle.buttonDown];
    styleArrow = NavButtonsStyle.arrowDown;
  }
  if (direction === 'left') {
    styleBtn = [NavButtonsStyle.button, NavButtonsStyle.buttonLeft];
    styleArrow = NavButtonsStyle.arrowLeft;
  }
  if (direction === 'right') {
    styleBtn = [NavButtonsStyle.button, NavButtonsStyle.buttonRight];
    styleArrow = NavButtonsStyle.arrowRight;
  }
  return (
    <Pressable style={styleBtn} onPress={() => onPress(direction)}>
      <View style={styleArrow}></View>
    </Pressable>
  );
};

export default SingleNavButton;
