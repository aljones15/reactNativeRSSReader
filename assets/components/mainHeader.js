import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles, sizes, flatten } from '../styles.js';
import { REMOVE_ITEM, TOGGLE_MODAL, getRss } from '../actions.js';
import { Button, Toolbar } from 'react-native-material-design';

class MainHeader extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={ styles.header }>
        <Text onPress={this.props.open()} style={ flatten(styles.fontCenter, sizes.flexOne) }>Items</Text>
        <Text onPress={this.props.open()} style={ flatten(styles.fontCenter, sizes.flexTwo) }>Add Feed</Text>
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
    getItems: getRss(dispatch) //  this is for the items menu
  }

}

export default connect(mapStateToProps, dispatchToStore)(MainHeader)
