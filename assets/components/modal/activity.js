'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

type State = { animating: boolean; };
type Timer = number;

const centering = {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 8
};


export default class 
ToggleAnimatingActivityIndicator extends Component{
  state: State;
  _timer: Timer;
  
  constructor(props){
    super(props);
    this.state = {
      animating: true
    };
  }

  componentDidMount() {
    this.setToggleTimeOut();
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  setToggleTimeOut() {
    this._timer = setTimeout(() => {
      this.setState({ animating: !this.state.animating});
      this.setToggleTimeOut();
    }, 5000)
  }

  render(){
    return (
      <View testID="activity_timer">
        <ActivityIndicator
          animating={this.state.animating}
          style={centering, [{height: 80}]}	
	  size="large"
        />
      </View>
    );
  }
}


