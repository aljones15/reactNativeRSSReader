import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, RefreshControl, Text } from 'react-native';
import { select_item, RESET_SKIP } from '../../actions.js';
import { styles, growFlex } from '../../Styles/styles.js';
import MainHeader from '../headers/mainHeader.js';
import FeedModal from '../modal/modal.js';
import PaginateView from '../buttons/paginateView.js';
import { Item } from '../items/item.js';
import { refreshFeeds } from '../../Services/rssService.js';
import { RssListProps } from '../../Types/types.js';
import Icon from 'react-native-vector-icons/EvilIcons';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

class RssList extends Component{
  props: RssListProps; 
  render(){
    /**
    * not valid means there are no rss items to display so we let the user refresh
    */
    if(!this.props.valid){
      return(
  	<View style={styles.container} testID="rss_list">
          <MainHeader />
          <FeedModal />
          <View />
	  <View style={[styles.mainFeed, styles.flexCenterCol]}>
	    <Text>No Items</Text>
            <Icon name="undo" size={90} color="#080707" onPress={this.props.refresh} />
	    <Text>Refresh</Text> 
          </View> 
        </View>);
  }
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
      return s.rss.query.results.item.length;
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

  const validRss = validateRss(state.reduceItems);
  return {
    items: validRss ? 
	    ds.cloneWithRows(state.
			    reduceItems.
			    rss.query.
			    results.item.
			    sort(sortByPubDate)) : 
	    ds.cloneWithRows(["Loading"]),
    loading: state.reduceItems.network_update,
    valid: validRss
  };
}

const dispatchToStore = (dispatch) => {
  return {
    selectItem: (item) => { return (event) => dispatch(select_item(item)) },
    refresh: () => { return refreshFeeds(dispatch, {type: RESET_SKIP}) }
  }
}

export default connect(mapStateToProps, dispatchToStore)(RssList);
