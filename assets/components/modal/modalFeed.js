import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles, growFlex, makeBorder} from '../../Styles/styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { isUrl } from '../../Services/validation.js';

export default class ModalFeed extends Component {
  constructor(props){
    super(props);
    this.state = { input: "", valid: true };
  }
  componentDidUpdate(){
  }
  change(e){
    this.setState({ input: e.nativeEvent.text, 
	    valid: isUrl.test(e.nativeEvent.text) });
  }
  checkBorder(){
   if(this.state.input.length < 5){
     return makeBorder('green', 1, 'solid');
   }
   if(this.state.valid){
     return makeBorder('black', 1, 'solid'); 
   }
   return makeBorder('red', 1, 'solid');
  }
  render(){
    return(
      <View style={[ growFlex(1), 
	      styles.flexCenterRow, 
	    this.checkBorder()  ]}>
        <TextInput
          placeholder="Add Feed"
          style={[growFlex(10), { padding: 5 } ]}
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
      </View>
      )
  }
}
