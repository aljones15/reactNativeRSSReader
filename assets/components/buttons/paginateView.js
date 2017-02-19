import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles, growFlex } from '../../Styles/styles.js';
import Next from './next.js';
import Previous from './previous.js';
import { INCREMENT_SKIP, DECREMENT_SKIP } from '../../actions.js';
import { getRssFeeds } from '../../Services/rssService.js';
import { getAllSubs } from '../../Services/asyncStorage.js';
import { PaginateProps } from '../../Types/types.js';

class Paginate extends Component {
  props: PaginateProps;
  constructor(props){
    super(props);
  }
  render() {
    const skip = this.props.skip;
    return(
    <View 
    style={[growFlex(5), styles.flexCenterRow ]}
    testID="paginate_view"
    >
      <Previous skip={skip} action={this.props.previous(skip)} />
      <Next skip={skip} action={this.props.next(skip)} />
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
    /**
    * if skip minus 10 is greater than or equal to 0 then we allow the user to move back
    * if skip is less than 10 then we just use 0
    * @param {number} the number of items to skip
    */
    previous: (skip: number) => () => {
	    let s = skip - 10 >= 0 ? skip - 10 : skip;
	    dispatch({ type: DECREMENT_SKIP, payload: s })
	    if(s != skip){ 
            getAllSubs().then((subs)=> 
              getRssFeeds(dispatch)(subs, s));}
    },
    /**
    * next simply increments skip by 10 then dispatches the action
    * @param {number} the number of items to skip
    */
    next: (skip: number) => () => {
	    let s = skip + 10;
            dispatch({ type: INCREMENT_SKIP, payload: s });
	    getAllSubs().then((subs)=> 
              getRssFeeds(dispatch)(subs, s)); 
    }
  }
}

export default connect(MapStateToProps, DispatchToStore)(Paginate);
