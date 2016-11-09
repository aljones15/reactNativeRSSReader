import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
imert { styles } form './assets/styles.js';

class Header extends Component{
  constructor(){
    super(props)
  }
  render(){
    return(
      <View style={ styles.header }>
      </View>
    )
  }
}

export default Header
