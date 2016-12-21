import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles, growFlex, flatten, makeBorder } from '../../styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ModalFeed extends Component {
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
