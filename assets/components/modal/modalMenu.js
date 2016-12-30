import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { styles, growFlex, flatten, makeBorder } from '../../styles.js';
import { getItem, deleteAll } from '../../asyncStorage.js';


class ModalMenu extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    getItem('urls').then((r) => { console.log(r); });
  }
  render(){
    return(
      <View style={ flatten(growFlex(6), { padding: 10, flexDirection: 'row' })}>
        <Text onPress={() => deleteAll()} style={ flatten(styles.fontCenter, growFlex(2)) }>
          <Icon name="eraser" size={20} color="#080707"/> Delete All
        </Text>
        <Text onPress={() => console.log("list feeds")} style={ flatten(styles.fontCenter, growFlex(2)) }>
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

  return {};
}

export default connect(mapStateToProps, DispatchToStore)(ModalMenu);
