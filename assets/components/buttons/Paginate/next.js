import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { nextStyle } from './style.js';

/**
* This is the Next Button
* it increments by 10
* @ param Object takes a prop object with an increment action
*/

const Next = ({action}) =>
  <View 
    style={ nextStyle } 
    testID="next_btn"
    >
      <Text onPress={action}>
        Next
      </Text>
      <Icon name="arrow-right" size={30} color="#080707"/>
  </View>

export default Next;
