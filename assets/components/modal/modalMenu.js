import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { styles, growFlex, flatten, makeBorder } from '../../styles.js';

class ModalMenu extends Component {
  render(){
    return(
      <View style={growFlex(6)}>
        <Text>menu</Text>
      </View>
      )
  }
}

const mapStateToProps = (state,props) => {

  return {};
}

const DispatchToStore = (dispatch) => {

  return {};
}

export default connect(mapStateToProps, DispatchToStore)(ModalMenu);