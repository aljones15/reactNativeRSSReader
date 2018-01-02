import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import { styles, growFlex, 
	evenItemColor, oddItemColor } from 'Styles/styles.js';
import LinearGradient from 'react-native-linear-gradient';

/**
 * Item - the rss items in the Rss List
 */
export class Item extends React.PureComponent {
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
  selectItem = () => {
    const {item} = this.props;
    this.props.selectItem({item});
  }
  render() {
      return(
        <TouchableWithoutFeedback 
	onPress={this.selectItem}>
        <View style={ this.getItemStyle(this.props.colorPicker) }>
          <Text style={styles.itemText}>{this.props.item.title ? 
		  this.props.item.title.trim() : "no title"}</Text>
        </View>
        </TouchableWithoutFeedback>
      )
  }
}
