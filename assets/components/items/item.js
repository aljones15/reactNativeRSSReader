import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import { styles, growFlex, flatten, evenItemColor, oddItemColor } from '../../Styles/styles.js';

export class Item extends Component {
  constructor(props){
    super(props);
  }
  getItemStyle(colorNum){
    if(colorNum % 2 == 0){
      return flatten(styles.item, growFlex(1), { backgroundColor: evenItemColor });
    }
    else {
      return flatten(styles.item, growFlex(1), { backgroundColor: oddItemColor });
    }
  }
  makeSafeLink(){
    return null; //this.props.item.link.replace("http", "https");
  }
  render() {
      return(
        <TouchableWithoutFeedback onPress={this.props.selectItem(this.props.item)}>
        <View style={ this.getItemStyle(this.props.colorPicker) }>
          <Text>{this.props.item.title ? this.props.item.title : ""}</Text>
        </View>
        </TouchableWithoutFeedback>
      )
  }
}

