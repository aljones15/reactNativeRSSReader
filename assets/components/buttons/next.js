import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { styles, growFlex } from '../../Styles/styles.js';

/**
* This is the Next Button
* in increments by 10
*/
export default class Next extends Component {
  render(){
    return(
    <View 
    style={[growFlex(1), 
      {backgroundColor: "#FFFFFF", 
       flexDirection: "row",
       justifyContent: "flex-end",
       alignItems: "center"}]} 
    testID="next_btn"
    >
      <Text onPress={this.props.action}>
        Next
      </Text>
      <Icon name="arrow-right" size={30} color="#080707"/>
    </View>)
  }
}
