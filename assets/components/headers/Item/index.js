import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles, growFlex } from 'Styles/styles.js';
import { REMOVE_ITEM } from 'Services/redux/actions.js';

/**
* This is the Header for the Actual web page view / Article
* it's stateless and just provides a way to get back
* @ param {Object} props
*/
const Header = (props) =>(
      <View testID="header" style={ styles.header }>
        <Text 
	style={[styles.fontCenter, growFlex(1)]} 
	onPress={props.back()}>Back</Text>
      </View> 
);

const mapStateToProps = (state, props) => {
  return props;
}

const dispatchToStore = (dispatch) => {
  return {
    back: () => () => dispatch({type: REMOVE_ITEM})
  }
}

export default connect(mapStateToProps, dispatchToStore)(Header)
