import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, RefreshControl } from 'react-native';
import { select_item, refreshFeeds, getRssFeeds } from '../../actions.js';
import { styles, growFlex, flatten } from '../../Styles/styles.js';
import MainHeader from '../headers/mainHeader.js';
import FeedModal from '../modal/modal.js';
import PaginateView from '../buttons/paginateView.js';
import { Item } from '../items/item.js';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

class RssList extends Component{ 

render(){
  return(
  <View style={ styles.container }>
    <MainHeader />
    <FeedModal />
    <ListView 
    style={ styles.mainFeed }
    refreshControl={ <RefreshControl 
	    refreshing={this.props.loading} 
	    onRefresh={this.props.refresh} 
	    />  }
    dataSource={this.props.items}
    renderRow={(rowData, sectionID, rowID, highlightRow) =>
    <Item colorPicker={rowID} item={rowData} selectItem={this.props.selectItem}></Item>}
    />
    {this.props.children}
    <PaginateView />
  </View>);
  }
}

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


const mapStateToProps = (state, props) => {

  
  return {
    items: validateRss(state.reduceItems) ? 
	    ds.cloneWithRows(state.reduceItems.rss.query.results.item.sort(sortByPubDate)) : 
	    ds.cloneWithRows(["Loading"]),
    loading: state.reduceItems.network_update
  };
}

const dispatchToStore = (dispatch) => {
  return {
    selectItem: (item) => { return (event) => dispatch(select_item(item)) },
    refresh: () => { return refreshFeeds(dispatch) }
  }
}

export default connect(mapStateToProps, dispatchToStore)(RssList);
