import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from '../styles.js';
import { connect } from 'react-redux';
import { TOGGLE_MODAL } from `../actions.js`;

class Modal extends Component {
  constructor(props){
    super(props)
  }
  render(){
    
  }
}

const mapStateToProps = (state, props) => {
  return props;
}

const dispatchToStore = (dispatch) => {
  return {
    back: () => () => dispatch({type: TOGGLE_MODAL})
  }

  export default connect(mapStateToProps, dispatchToStore)(Modal)
