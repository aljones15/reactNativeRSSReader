import React, { Component } from 'react';
import { Button, Subheader } from 'react-native-material-design';
import { View } from 'react-native';


export class ITEM extends Component {
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
        <View>
          <Subheader text={this.props.item.title ? this.props.item.title : ""} />
          </View>
      )
  }
}
