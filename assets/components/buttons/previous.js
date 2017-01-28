import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Previous extends Component {
  render(){
    return(
    <View 
    style={this.props.styles}
    testID="previous_btn"
    >
      <Text onPress={() => this.props.action()}>
        Previous
      </Text>
    </View>)
  }
} 
