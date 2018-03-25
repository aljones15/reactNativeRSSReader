import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { styles, growFlex, makeBorder } from 'Styles/styles.js';
import { getItem, deleteAll } from 'Services/asyncStorage.js';
import { SWITCH_MAIN } from 'Services/redux/actions';

class ModalMenu extends React.PureComponent {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    getItem('urls').then((r) => { console.log(r); });
  }
  render(){
    return(
      <View 
      style={[growFlex(6), { padding: 10, flexDirection: 'row' }]}
      testID="modal_menu"
      >
        <Text onPress={() => deleteAll()} style={[styles.fontCenter, growFlex(2)]}>
          <Icon name="eraser" size={20} color="#080707"/> Delete All
        </Text>
        <Text 
	      onPress={this.props.subscriptions}
	      style={[styles.fontCenter, growFlex(2)]}
	      testID="subscriptions_text"
	     >
          <Icon name="list-ol" size={20} color="#080707"/> Subscriptions
        </Text>
      </View>
      )
  }
}

const mapStateToProps = (state,props) => {
  return {};
}

const DispatchToStore = (dispatch) => {
  return {
    subscriptions: () => {
      dispatch({type: SWITCH_MAIN , payload: 'Subscriptions'}); 
    }
  };
}

export default connect(mapStateToProps, DispatchToStore)(ModalMenu);
