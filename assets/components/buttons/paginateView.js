import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles, growFlex } from '../../Styles/styles.js';
import Next from './next.js';
import Previous from './previous.js';
import { INCREMENT_SKIP, 
	DECREMENT_SKIP, 
	getRssFeeds } from '../../actions.js';
import { getAllSubs } from '../../Services/asyncStorage.js';

class Paginate extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const btn = [growFlex(1), {backgroundColor: "#FFFF"}];
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
	    let s = skip + 10;
            dispatch({ type: INCREMENT_SKIP, payload: s });
	    getAllSubs().then((subs)=> 
              getRssFeeds(dispatch)(subs, s)); 
    },
    previous: (skip) => () => {
	    let s = skip - 10 >= 0 ? skip - 10 : skip;
	    dispatch({ type: DECREMENT_SKIP, payload: s })
	    if(s != skip){ 
            getAllSubs().then((subs)=> 
              getRssFeeds(dispatch)(subs, s));}
    }
  }
}

export default connect(MapStateToProps, DispatchToStore)(Paginate);
