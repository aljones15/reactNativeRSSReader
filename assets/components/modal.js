import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles, growFlex, flatten, makeBorder } from '../styles.js';
import { connect } from 'react-redux';
import { TOGGLE_MODAL, ADD_FEED, getRss } from '../actions.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { mergeItem } from '../asyncStorage.js';
import ModalMenu from './modal/modalMenu.js';
import ModalFeed from './modal/modalFeed.js';


class FeedModal extends Component {
  constructor(props){
    super(props)
  }
  render(){
    if(!this.props.menu)
      return null;
    switch(this.props.section){
      case "menu":
        return(<ModalMenu />);
      case "new_feed":
        return(<ModalFeed submit={this.props.submit} />);
      default:
        return null;
    }
  }
}

const mapStateToProps = (state, props) => {
  return Object.assign({}, state.reduceDisplay);
}

const dispatchToStore = (dispatch) => {
  return {
    close: (modal_name) => (event) => dispatch({type: TOGGLE_MODAL}),
    submit: (input) => (e) => {
      //mergeItem("urls", [input]);
      dispatch({
        type: ADD_FEED,
        url: input
      });
      getRss(dispatch)(input);
      dispatch({type: TOGGLE_MODAL});
  }
}}

export default connect(mapStateToProps, dispatchToStore)(FeedModal)
