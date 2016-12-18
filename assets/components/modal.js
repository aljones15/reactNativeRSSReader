import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles, growFlex, flatten, makeBorder } from '../styles.js';
import { connect } from 'react-redux';
import { TOGGLE_MODAL, ADD_FEED, getRss } from '../actions.js';
import Icon from 'react-native-vector-icons/FontAwesome';



class ModalMenu extends Component {
  render(){
    return(
      <View style={growFlex(6)}>
        <Text>menu</Text>
      </View>)
      }
}

class ModalFeed extends Component {
  constructor(props){
    super(props);
    this.state = { input: "" };
  }
  componentDidUpdate(){
  }
  change (e) {
    this.setState({ input: e.nativeEvent.text });
  }
  render(){
    return(
      <View style={ flatten(growFlex(1), styles.flexCenterRow, makeBorder('black', 1, 'solid')) }>
        <TextInput
          placeholder="Add Feed"
          style={ flatten( growFlex(10), { padding: 5 } )}
          autoCapitalize="none"
          multiline={false}
          numberOfLines = {1}
          autoCorrect={false}
          autoFocus={true}
          keyboardType="url"
          onChange={this.change.bind(this)}
          onEndEditing={this.props.submit(this.state.input)}
        />
        <Icon name="check" style={ growFlex(1) } size={30} color="#080707"/>
      </View>)
    }
}



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
      dispatch({
        type: ADD_FEED,
        url: input
      });
      getRss(dispatch)(input);
  }
}}

export default connect(mapStateToProps, dispatchToStore)(FeedModal)
