import React, { Component } from 'react';
import { View } from 'react-native';
import { store } from 'Services/redux/';
import { Provider } from 'react-redux';
import Switcher from './Switcher/';
/**
* Just the Root element it's stateless
* @ param {Object} props
*/
const Root = (props) => (
  <Provider store={store}>
    <Switcher />
  </Provider> 
)

export default Root
