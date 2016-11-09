import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from '../styles.js';
import { store } from '../reduxCreate.js';
import { Provider } from 'react-redux';
import { RssStore} from './RssBase.js'

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

export default Root
