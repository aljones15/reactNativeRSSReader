import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles, growFlex, flatten, makeBorder } from '../../styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Loading extends Component {
    constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={ flatten( growFlex(100), styles.fontCenter) }>
        <Text><Icon name="refresh" style={ growFlex(1) } size={100} color="#080707"/></Text>
      </View>
    )
  }
}
