/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  ListView,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import { Button, Subheader } from 'react-native-material-design';
import { store } from './business/reduxCreate.js';
import { connect, Provider } from 'react-redux';

let yahooQLbase = "https://query.yahooapis.com/v1/public/yql?q=select * from rss where url=";

function getRss(url, cb){
    let uri = encodeURI(yahooQLbase + "'" + url + "'");
    return fetch(uri, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then((r) => {
    if(r){
      r.json().then((t) => cb(t))
  } else {
    cb(null);
  }
  });
}

class ITEM extends Component {
  constructor(props){
    super(props);
  }
  makeSafeLink(){
    console.log("make safe link");
    return null; //this.props.item.link.replace("http", "https");
  }
  ErrorFun(){
    return(
      <Text>Error</Text>
    )
  }
  getHtml(){
    return '<!DOCTYPE html><html><body><h1>This is a heading!</h1></body></html>';
  }
  render() {
      return(
        <View>
          <Subheader text={this.props.item.title ? this.props.item.title : ""} />
          </View>
      )
  }
}



const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

class test3 extends Component {
  constructor(props){
    super(props)

    this.state = {
      rss: ds.cloneWithRows(["Loading"])
    };
  }
  printResult(responseText){
      if(responseText.query && responseText.query.results && responseText.query.results.item){
        this.setState({ rss: ds.cloneWithRows(responseText.query.results.item) });
      }


  }
  fetchResult(){
    let rss = getRss("http://boingboing.net/feed", this.printResult.bind(this));
    return rss;
  }
  componentDidMount(){
    console.log("testing props passes");
    console.log(this.props);
    this.fetchResult();
  }
  render() {
    return(
      <Provider store={store}>
       <View>
       <ListView
         dataSource={this.state.rss}
         renderRow={(rowData) => <ITEM item={rowData}></ITEM>}
       />
       </View>
      </Provider>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log("map state to props");
  return {
    test: "test",
    items: state.rss
  };
}

const dispatchToStore = (dispatch) => {
  console.log("map dispatch to props");
  return {
    selectItem: () => { console.log("select item"); }
  }
}

export default connect(mapStateToProps, dispatchToStore)(test3)

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

AppRegistry.registerComponent('test3', () => test3);
