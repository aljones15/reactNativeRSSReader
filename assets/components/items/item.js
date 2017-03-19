import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import { styles, growFlex, 
	evenItemColor, oddItemColor } from '../../Styles/styles.js';

export class Item extends Component {
  constructor(props){
    super(props);
  }
  /***
  * returns an object so each item has an even color
  * and takes up the entire width of the screen
  * @param {string} color
  */
  setItemColor(color){ 
    return { 
      backgroundColor: color,
      borderRightColor: color,
      borderLeftColor: color 
    }
  }
  /***
   * modulates the color of an item by odd or even
   * @param {int} the item index
   */
  getItemStyle(colorNum: number){
    if(colorNum % 2 == 0){
      return [styles.item, growFlex(1), this.setItemColor(evenItemColor)];
    }  
    return [styles.item, growFlex(1), this.setItemColor(oddItemColor) ];
  }
  render() {
      return(
        <TouchableWithoutFeedback 
	onPress={this.props.selectItem(this.props.item)}>
        <View style={ this.getItemStyle(this.props.colorPicker) }>
          <Text>{this.props.item.title ? 
		  this.props.item.title.trim() : "no title"}</Text>
        </View>
        </TouchableWithoutFeedback>
      )
  }
}


