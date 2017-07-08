import React, { Component } from 'react';
import { View } from 'react-native';
import { store } from '../Services/redux/';
import { Provider } from 'react-redux';
import RssStore from './rss/Base/';

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
