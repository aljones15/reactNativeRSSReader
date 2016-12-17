import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles, growFlex, flatten } from '../styles.js';
import { connect } from 'react-redux';
import { TOGGLE_MODAL } from '../actions.js';


class ModalMenu extends Component {
  render(){
    return(
      <View style={growFlex(6)}>
        <Text>menu</Text>
      </View>)
      }
}

class ModalFeed extends Component {
  render(){
    return(
      <View style={growFlex(3)}>
        <TextInput placeholder="Modal Feed" style={growFlex(1)} autoCapitalize="none" multiline={false} numberOfLines = {1} autoCorrect={false} autoFocus={true} />
      </View>)
    }
}

class FeedModal extends Component {
  constructor(props){
    super(props)
  }
  componentDidUpdate(){
    console.log(this.props);
  }
  render(){
    if(!this.props.menu)
      return null;
    switch(this.props.section){
      case "menu":
        return(<ModalMenu />);
      case "new_feed":
        return(<ModalFeed />);
    }

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
