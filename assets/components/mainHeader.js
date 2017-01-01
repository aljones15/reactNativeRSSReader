import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles, growFlex, flatten } from '../styles.js';
import { REMOVE_ITEM, TOGGLE_MODAL, refreshFeeds } from '../actions.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class MainHeader extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.header}>
        <Text onPress={this.props.open("menu")} style={ flatten(styles.fontLeft, growFlex(1), {padding: 5 }) }>
          <Icon name="list" size={30} color="#080707"/>
        </Text>
        <Text onPress={this.props.open("menu")} style={ growFlex(1)}> Menu </Text>
        <Text onPress={this.props.open("new_feed")} style={ flatten(styles.fontLeft, growFlex(2)) }>
          <Icon name="plus" size={30} color="#080707"/>
        </Text>
        <Text onPress={this.props.open("new_feed")} style={growFlex(1)}> Add </Text>
        <Text onPress={this.props.open("new_feed")} style={ flatten(styles.fontLeft, growFlex(2)) }>
          <Icon name="refresh" size={30} color="#080707"/>
        </Text>
        <Text onPress={this.props.refresh} style={growFlex(1)}> Refresh </Text>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return Object.assign({}, state.reduceDisplay);
}

const dispatchToStore = (dispatch) => {
  return {
    open: (modal_name) => (event) => dispatch({type: TOGGLE_MODAL, name: modal_name}),
    refresh: () => { return refreshFeeds(dispatch) }
  }

}

export default connect(mapStateToProps, dispatchToStore)(MainHeader)

