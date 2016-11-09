import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { styles } from '../styles.js';
import { REMOVE_ITEM } from '../actions.js';
import { Button } from 'react-native-material-design';

class Header extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={ styles.header }>
        <Button value="Back" text="Back" onPress={this.props.back()} />
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
