import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { styles } from '../styles.js';

class Header extends Component{
  constructor(props){
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
