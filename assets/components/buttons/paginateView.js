import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles, growFlex } from '../../Styles/styles.js';
import Next from './next.js';
import Previous from './previous.js';
import { INCREMENT_SKIP, DECREMENT_SKIP } from '../../actions.js';

class Paginate extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const btn = [growFlex(1)];
    const skip = this.props.skip;
    return(
    <View style={[growFlex(5), styles.flexCenterRow ]}>
      <Next styles={btn} action={this.props.next(skip)} />
      <Previous styles={btn} action={this.props.previous(skip)} />
    </View>);
  }
}

const MapStateToProps = (state) => {
  return {
    skip: state.reduceItems.skip 
  };
}

const DispatchToStore = (dispatch) => {
  return {
    next: (skip) => () => {
      dispatch({ type: INCREMENT_SKIP, payload: skip + 1 }) 
    },
    previous: (skip) => () => {
      dispatch({ type: DECREMENT_SKIP, payload: skip - 1 }) 
    }
  }
}

export default connect(MapStateToProps, DispatchToStore)(Paginate);
