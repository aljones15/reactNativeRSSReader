import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, Text  } from 'react-native';
import { RSS_UPDATE, UPDATE_ITEMS_FAILED, select_item } from '../actions.js';
import { Item } from './item.js';
import { styles, growFlex, flatten } from '../styles.js';
import ItemView from './itemView.js';
import MainHeader from './mainHeader.js';
import { getRss, getRssFeeds } from '../actions';
import FeedModal from './modal.js';
import Loading from './modal/loading.js';
import { addUrl, getAllSubs, initFeeds } from '../asyncStorage.js';


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

class RssBase extends Component {
  constructor(props){
    super(props);
  }
  async componentWillMount(){
    this.props.init();
  }
  render(){
    if(this.props.item){
      return(<ItemView />);
    }
    if(this.props.loading){
      return(
        <View style={ styles.container }>
          <MainHeader />
          <FeedModal />
          <Loading />
        </View>
      );
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
      return s;
    }
    return false;
  }

  function sortByPubDate(a,b){
    let dateA = new Date(a.pubDate);
    let dateB = new Date(b.pubDate);
    if(dateA > dateB){
      return -1;
    }
    if(dateA < dateB){
      return 1;
    }
    return 0;
  }

  return {
    items: validateRss(state.reduceItems) ? ds.cloneWithRows(state.reduceItems.rss.query.results.item.sort(sortByPubDate)) : ds.cloneWithRows(["Loading"]),
    item: state.reduceItems.item,
    loading: state.reduceItems.network_update
  };
}

const dispatchToStore = (dispatch) => {
  return {
    selectItem: (item) => { return (event) => dispatch(select_item(item)) },
    getItem: getRss(dispatch),
    init: initFeeds(dispatch)
  }
}

export default connect(mapStateToProps, dispatchToStore)(RssBase);
