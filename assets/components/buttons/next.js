import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles, growFlex } from '../../Styles/styles.js';

class Next extends Component {
  render(){
    <View style={this.props.styles} >
      <Text>
        Previous
      </Text>
    </View>
  }
}
