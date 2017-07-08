import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { fadedBlack, solidBlack } from '../../Styles/colors.js';
import { styles, growFlex } from '../../Styles/styles.js';


// if skip is less than or equal to 0 disable previous we can't go back
const disabled = (skip: number) => skip <= 0 ? fadedBlack : solidBlack;

/**
* This is the Previous button
* It goes back 10 unless that would take us to less than 0 then it just returns 0
*/

const Previous = ({skip, action}) =>
  <View 
    style={[growFlex(1), 
      {backgroundColor: "#FFFFFF"}, 
      styles.flexCenterRow]}
    testID="previous_btn"
    >
      <Icon name="arrow-left" size={30} color={disabled(skip)}/>
      <Text onPress={action} style={[{color: disabled(skip)}]} >
        Previous
      </Text>
  </View>

export default Previous;
