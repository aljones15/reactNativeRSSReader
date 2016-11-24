import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { styles } from '../styles.js';
import { REMOVE_ITEM } from '../actions.js';
import { Button, Toolbar } from 'react-native-material-design';

class MainHeader extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={ styles.mainHeader }>
        <Button value="Items" text="Items" onPress={this.props.open()} />
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return props;
}

const dispatchToStore = (dispatch) => {
  return {
    open: () => () => dispatch({type: REMOVE_ITEM})
  }

}

export default connect(mapStateToProps, dispatchToStore)(MainHeader)
