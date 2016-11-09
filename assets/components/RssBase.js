import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, Text, WebView, ScrollView } from 'react-native';
import { RSS_UPDATE, UPDATE_ITEMS_FAILED, select_item } from '../actions.js';
import { Item } from './item.js';
import { styles } from '../styles.js';
import Header from './header.js';

export let yahooQLbase = "https://query.yahooapis.com/v1/public/yql?q=select * from rss where url=";

export function getRss(dispatch){
  return function(url){
      let uri = encodeURI(yahooQLbase + "'" + url + "'");
      return fetch(uri, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then((r) => {
      if(r){
        r.json().then((t) => dispatch(RSS_UPDATE(t)))
    } else {
      dispatch({
        type: UPDATE_ITEMS_FAILED,
        payload: r
      });
    }
  });
  }
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

class RssBase extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getItems("http://boingboing.net/feed");
  }
  secureUri(uri){
    const isSecure = /^\s*[Hh][Tt]{2}[Pp][Ss]/;
    const notSecure = /^\s*[Hh][Tt]{2}[Pp]/;
    if(isSecure.test(uri)){
      return uri;
    }
    return uri.replace(notSecure, "https");
  }
  componentDidUpdate(){

  }
  render(){
    if(this.props.item){
      return(
        <ScrollView style={styles.scollWebView}>
           <WebView source={{uri: this.secureUri(this.props.item.link) }} style={styles.webView} />
        </ScrollView>
      )
    }
    return(
    <View>
    <Header />
    <ListView
      dataSource={this.props.items}
      renderRow={(rowData) => <Item item={rowData} selectItem={this.props.selectItem}></Item>}
    />
      {this.props.children}
    </View>
  )
 }
}

const mapStateToProps = (state, props) => {
  function validateRss(s){
    if(s.rss && s.rss.query && s.rss.query.results && s.rss.query.results.item){
      return s;
    }
    return false;
  }
  return {
    items: validateRss(state) ? ds.cloneWithRows(state.rss.query.results.item) : ds.cloneWithRows(["Loading"]),
    item: state.item
  };
}

const dispatchToStore = (dispatch) => {
  return {
    selectItem: (item) => { return (event) => dispatch(select_item(item)) },
    getItems: getRss(dispatch)
  }
}

export default connect(mapStateToProps, dispatchToStore)(RssBase);
