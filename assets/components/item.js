import React, { Component } from 'react';
import { Button, Subheader } from 'react-native-material-design';
import { View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';


export class Item extends Component {
  constructor(props){
    super(props);
  }
  makeSafeLink(){
    console.log("make safe link");
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
        <View>
          <Subheader text={this.props.item.title ? this.props.item.title : ""} />
        </View>
        </TouchableWithoutFeedback>
      )
  }
}
