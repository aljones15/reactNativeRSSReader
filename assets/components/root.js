import React, { Component } from 'react';
import { View } from 'react-native';
import { store } from '../Services/reduxCreate.js';
import { Provider } from 'react-redux';
import RssStore from './rss/RssBase.js'
import PropTypes from 'prop-types';

class Root extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){

  }
  render() {
    return(
      <Provider store={store}>
       <RssStore>
       </RssStore>
      </Provider>
    );
  }
}

export default Root
