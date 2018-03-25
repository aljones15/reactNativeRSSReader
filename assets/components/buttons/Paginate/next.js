import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { nextStyle } from './style.js';

/**
* This is the Next Button
* it increments by 10
* @ param Object takes a prop object with an increment action
*/

const Next = ({action}) =>
  <TouchableWithoutFeedback onPress={action} testID="next_tap">
    <View 
      style={ nextStyle } 
      testID="next_btn"
      accessible={true}
    >
      <Text testID='next_text'>
        Next
      </Text>
      <Icon name="arrow-right" size={30} color="#080707"/>
    </View>
  </TouchableWithoutFeedback> 

export default Next;
