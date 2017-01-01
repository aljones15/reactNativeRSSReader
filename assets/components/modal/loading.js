import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles, growFlex, flatten, makeBorder } from '../../Styles/styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Loading extends Component {
    constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={ growFlex(100) }>
        <Text style={styles.fontCenter}><Icon name="refresh" style={ growFlex(1) } size={100} color="#080707"/></Text>
      </View>
    )
  }
}
