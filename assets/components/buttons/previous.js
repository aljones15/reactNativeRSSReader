import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { fadedBlack, solidBlack } from '../../Styles/colors.js';
import { styles, growFlex } from '../../Styles/styles.js';

export default class Previous extends Component {
  disabled(): string {
    if(this.props.skip <= 0){
      return fadedBlack;
    }
      return solidBlack;
  }
  render(){
    return(
    <View 
    style={[growFlex(1), 
      {backgroundColor: "#FFFFFF"}, 
      styles.flexCenterRow]}
    testID="previous_btn"
    >
      <Icon name="arrow-left" size={30} color={this.disabled()}/>
      <Text onPress={this.props.action} style={[{color: this.disabled()}]} >
        Previous
      </Text>
    </View>)
  }
} 
