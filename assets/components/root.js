import React, { Component } from 'react';
import { View } from 'react-native';
import { store } from 'Services/redux/';
import { Provider } from 'react-redux';
import RssStore from './rss/Base/';
/**
* Just the Root element it's stateless
* @ param {Object} props
*/
const Root = (props) => (
  <Provider store={store}>
  <RssStore>
  </RssStore>
  </Provider> 
)

export default Root
