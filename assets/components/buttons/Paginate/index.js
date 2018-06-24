import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { incrementThunk, decrementThunk } from './thunk.js';
import { indexStyle } from './style.js';
import Next from './next.js';
import Previous from './previous.js';
import throttle from 'lodash/throttle';

/**
 *Paginate button appears at the bottom of the App
* Controls where in the results we are
* @function Paginate
* @param {number} skip how many items we are skipping
* @param {function} previous the previous function
* @param {function} next function
*/

const Paginate = ({skip, previous, next}) =>
  <View 
    style={indexStyle}
    testID="paginate_view"
    >
      <Previous skip={skip} action={previous(skip)} />
      <Next skip={skip} action={next(skip)} />
  </View>

// just spread skip and take all the paginatoin related props
const MapStateToProps = ({skip}) => {
    return {
      ...skip
  };
}

const DispatchToStore = (dispatch, {update}) => {
  return {
    /**
    * if skip minus 10 is greater than or equal to 0 then we allow the user to move back
    * if skip is less than 10 then we just use 0
    * @param {number} the number of items to skip
    */
    previous: throttle((skip: number) => () => {
	    let s = skip - 10 >= 0 ? skip - 10 : skip;
            console.log("Paginate Index -> previous skip: " + s);
	    dispatch(decrementThunk(skip, s, update));
    },100),
    /**
    * next simply increments skip by 10 then dispatches the action
    * @param {number} the number of items to skip
    */
    next: throttle((skip: number) => () => {
	    let s = skip + 10;
            console.log("Paginate Index -> next skip: " + s);
            dispatch(incrementThunk(s, update));
    }, 100)
  }
}

export default connect(MapStateToProps, DispatchToStore)(Paginate);
