import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { styles, 
	growFlex, 
	flatten, 
	makeBorder } from '../../Styles/styles.js';
import { rotate } from '../../Styles/animations.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Loading extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    /*
     * http://browniefed.com/react-native-animation-book/basic/ROTATE.html
     */
    this._animatedValue = new Animated.Value(0);
  }
  cycleAnimation(){
    /*
     * http://stackoverflow.com/questions/31578069/repeat-animation-with-new-animated-api
     */
    Animated.timing(this._animatedValue, {
      toValue: 100,
      duration: 2000
      }).start(() => this.cycleAnimation());
  }
  componentDidMount(){
   this.cycleAnimation(); 
  }
  render(){
    let interpolatedRotateAnimation = 
	    this._animatedValue.interpolate({
	        inputRange: [0, 100],
	      outputRange: ['0deg', '360deg']
	    });
    return(
      <View style={[growFlex(100)]}>
        <Animated.Text 
	style={[ styles.fontCenter,
                {backgroundColor: 'rgba(0,0,0,0)'},
		{transform:
	       	[{rotate: interpolatedRotateAnimation} ]} ]}>
	<Icon 
	name="refresh" 
	style={ growFlex(1) } 
	size={100} 
	color="#080707"
	/>
	</Animated.Text>
      </View>
    )
  }
}
