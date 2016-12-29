import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, Text  } from 'react-native';
import { RSS_UPDATE, UPDATE_ITEMS_FAILED, select_item } from '../actions.js';
import { Item } from './item.js';
import { styles, growFlex, flatten } from '../styles.js';
import ItemView from './itemView.js';
import MainHeader from './mainHeader.js';
import { getRss } from '../actions';
import FeedModal from './modal.js';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

class RssBase extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getItems("http://boingboing.net/feed");
  }
  render(){
    if(this.props.item){
      return(<ItemView />);
    }
    return(
    <View style={ styles.container }>
    <MainHeader />
    <FeedModal />
    <ListView
      style={ styles.mainFeed }
      dataSource={this.props.items}
      renderRow={(rowData, sectionID, rowID, highlightRow) =>
      <Item colorPicker={rowID} item={rowData} selectItem={this.props.selectItem}></Item>}
    />
      {this.props.children}
    </View>
  )
 }
}

const mapStateToProps = (state, props) => {

  function validateRss(s){
    if(s && s.rss && s.rss.query && s.rss.query.results && s.rss.query.results.item){
      console.log("valid rss");
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
