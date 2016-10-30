/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { styles } from './assets/styles.js';
import { store } from './assets/reduxCreate.js';
import { Provider } from 'react-redux';
import { RssStore} from './assets/components/RssBase.js'


class Root extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){

  }
  render() {
    return(
      <Provider store={store}>
       <View>
       <RssStore>
       </RssStore>
       </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('test3', () => Root);
