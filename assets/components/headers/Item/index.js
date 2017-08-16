import React from 'react';
import { View, Text } from 'react-native';
import { styles, growFlex } from 'Styles/styles.js';
import { REMOVE_ITEM } from 'Services/redux/actions.js';

/**
* This is the Header for the Actual web page view / Article
* it's stateless and just provides a way to get back
* @ param {Object} props
*/
const Header = ({back}) =>(
      <View testID="header" style={ styles.header }>
        <Text 
	style={[styles.fontCenter, growFlex(1)]} 
	onPress={back}>Back</Text>
      </View> 
);



export default Header
