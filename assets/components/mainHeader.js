import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles } from '../styles.js';
import { REMOVE_ITEM, TOGGLE_MODAL, getRss } from '../actions.js';
import { Button, Toolbar } from 'react-native-material-design';

class MainHeader extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={ styles.header }>
        <Text onPress={this.props.open()} style={{flex: 1, color: styles.fontColor}}>Items</Text>
        <Text onPress={this.props.open()} style={{flex: 1, color: styles.fontColor}}>Add Feed</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return props;
}

const dispatchToStore = (dispatch) => {
  return {
    open: () => () => dispatch({type: TOGGLE_MODAL}),
    getItems: getRss(dispatch)
  }

}

export default connect(mapStateToProps, dispatchToStore)(MainHeader)
