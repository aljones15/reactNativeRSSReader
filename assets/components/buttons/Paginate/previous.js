import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { disabled, previousStyle } from './style.js';

/**
* This is the Previous button
* It goes back 10 unless that would take us to less than 0 then it just returns 0
* @param {number} skip the current amount to skip
* @param {function} action the action to take on click
*/

const Previous = ({skip, action}) =>
  <TouchableWithoutFeedback onPress={action}>
    <View 
      style={ previousStyle }
      testID="previous_btn"
    >
        <Icon name="arrow-left" size={30} color={disabled(skip)}/>
        <Text style={[{color: disabled(skip)}]} >
          Previous
        </Text>
    </View>
  </TouchableWithoutFeedback>

export default Previous;
