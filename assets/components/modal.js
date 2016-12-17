import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles.js';
import { connect } from 'react-redux';
import { TOGGLE_MODAL } from '../actions.js';

class FeedModal extends Component {
  constructor(props){
    super(props)
  }
  componentWillUpdate(){
    console.log(this.props);
  }
  render(){
    if(!this.props.menu){
      return null;
    }
    return(
      <View>
        <Text>Test</Text>
      </View>
      )
  }
}

const mapStateToProps = (state, props) => {
  return Object.assign({}, state.reduceDisplay);
}

const dispatchToStore = (dispatch) => {
  return {
    close: (modal_name) => (event) => dispatch({type: TOGGLE_MODAL})
  }
}

export default connect(mapStateToProps, dispatchToStore)(FeedModal)
