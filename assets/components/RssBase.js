import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, Text, WebView, ScrollView, Dimensions } from 'react-native';
import { RSS_UPDATE, UPDATE_ITEMS_FAILED, select_item } from '../actions.js';
import { Item } from './item.js';
import { styles, growFlex, flatten } from '../styles.js';
import Header from './header.js';
import MainHeader from './mainHeader.js';
import { getRss } from '../actions';

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
  render(){
    let {width, height, scale} = Dimensions.get('window');
    if(this.props.item){
      return(
        <View style={{ flex: 1}}>
          <View style={ styles.flexSpace }></View>
          <Header />
          <ScrollView style={styles.scollWebView}>
             <WebView source={{uri: this.secureUri(this.props.item.link) }} style={{ height: height, width: width }} />
          </ScrollView>
        </View>
      )
    }
    return(
    <View style={ styles.container }>
    <View style={ styles.flexSpace }></View>
    <MainHeader />
    <ListView
      style={ styles.mainFeed }
      dataSource={this.props.items}
      renderRow={(rowData, sectionID, rowID, highlightRow) => <Item colorPicker={rowID} item={rowData} selectItem={this.props.selectItem}></Item>}
    />
      {this.props.children}
    </View>
  )
 }
}

const mapStateToProps = (state, props) => {
  function validateRss(s){
    if(s && s.rss && s.rss.query && s.rss.query.results && s.rss.query.results.item){
      return s;
    }
    return false;
  }
  return {
    items: validateRss(state.reduceItems) ? ds.cloneWithRows(state.reduceItems.rss.query.results.item) : ds.cloneWithRows(["Loading"]),
    item: state.reduceItems.item
  };
}

const dispatchToStore = (dispatch) => {
  return {
    selectItem: (item) => { return (event) => dispatch(select_item(item)) },
    getItems: getRss(dispatch)
  }
}

export default connect(mapStateToProps, dispatchToStore)(RssBase);
