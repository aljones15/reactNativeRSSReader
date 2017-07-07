import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles, growFlex } from '../../Styles/styles.js';
import { REMOVE_ITEM } from '../../Services/redux/actions.js';

class Header extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View testID="header" style={ styles.header }>
        <Text 
	style={[styles.fontCenter, growFlex(1)]} 
	onPress={this.props.back()}>Back</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return props;
}

const dispatchToStore = (dispatch) => {
  return {
    back: () => () => dispatch({type: REMOVE_ITEM})
  }

}

export default connect(mapStateToProps, dispatchToStore)(Header)
