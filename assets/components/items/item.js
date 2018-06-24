import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import { styles, growFlex, 
	evenItemColor, oddItemColor } from 'Styles/styles.js';
import LinearGradient from 'react-native-linear-gradient';
import throttle from 'lodash/throttle';

/**
 * @class Item 
 * @description the rss items in the Rss List
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
  getColors() {
    return [
      '#FBFFFFFF',
      '#F8FFFFFF',
      '#F6FFFFFF',
      '#F4FFFFFF',
      '#F3FFFFFF',
      '#FFFBFFFF',
      '#FFFAFFFF',
      '#FFF7FFFF',
      '#FFF5FFFF',
      '#FFF2FFFF'
    ];
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
  selectItem = throttle(() => {
    const {item} = this.props;
    this.props.selectItem({item});
  }, 100)
  render() {
      return(
        <TouchableWithoutFeedback
          testID={'rss_list_' + this.props.index}
	  onPress={this.selectItem}
        >
          <View testID={'rss_list_view_' + this.props.index}>
            <Text style={styles.itemText} testID={'rss_list_text_' + this.props.index}>
              {this.props.item.title ? this.props.item.title.trim() : "no title"}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      )
  }
}
