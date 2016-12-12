import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import { styles, sizes, flatten, evenItemColor, oddItemColor } from '../styles.js';




export class Item extends Component {
  constructor(props){
    super(props);
  }
  getItemStyle(colorNum){
    if(colorNum % 2 == 0){
      return flatten(styles.item, sizes.flexOne, { backgroundColor: evenItemColor });
    }
    else {
      return flatten(styles.item, sizes.flexOne, { backgroundColor: oddItemColor });
    }
  }
  makeSafeLink(){
    return null; //this.props.item.link.replace("http", "https");
  }
  ErrorFun(){
    return(
      <Text>Error</Text>
    )
  }
  getHtml(){
    return '<!DOCTYPE html><html><body><h1>This is a heading!</h1></body></html>';
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
