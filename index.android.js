/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
import { Button, Subheader } from 'react-native-material-design';
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('test3', () => Root);
