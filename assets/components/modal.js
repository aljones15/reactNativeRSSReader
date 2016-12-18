import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles, growFlex, flatten, makeBorder } from '../styles.js';
import { connect } from 'react-redux';
import { TOGGLE_MODAL } from '../actions.js';
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
  componentDidMount(){
    console.log(this.props);
  }
  componentDidUpdate(){
    console.log(this.state);
  }
  change (e) {
    console.log(e);
    this.setState({ input: e.nativeEvent.text });
  }
  render(){
    return(
      <View style={ flatten(growFlex(1), styles.flexCenterRow, makeBorder('black', 1, 'solid')) }>
        <TextInput
          placeholder="Modal Feed"
          style={ flatten( growFlex(10), { padding: 5 } )}
          autoCapitalize="none"
          multiline={false}
          numberOfLines = {1}
          autoCorrect={false}
          autoFocus={true}
          keyboardType="url"
          onChange={this.change.bind(this)}
          onEndEditing={this.props.submit}
        />
        <Icon name="check" style={ growFlex(1) } size={30} color="#080707"/>
      </View>)
    }
}

const mapModalFeedStateToProps = (state, props) => {
  return {};
}

const dispatchModalFeedToStore = (dispatch) => {

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
    submit: (e) => { console.log("dispatch submit"); console.log(e) }
  }
}

export default connect(mapStateToProps, dispatchToStore)(FeedModal)
