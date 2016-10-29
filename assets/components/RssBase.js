import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, Text } from 'react-native';
import { RSS_UPDATE, UPDATE_ITEMS_FAILED } from '../actions.js';
import { Item } from './item.js';

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
      dispatch({type: UPDATE_ITEMS_FAILED});
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
  render(){
    return(
    <View>
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
    items: validateRss(state) ? ds.cloneWithRows(state.rss.query.results.item) : ds.cloneWithRows(["Loading"])
  };
}

const dispatchToStore = (dispatch) => {
  return {
    selectItem: () => { return () =>{ console.log("select item"); } },
    getItems: getRss(dispatch)
  }
}

export const RssStore = connect(mapStateToProps, dispatchToStore)(RssBase);
