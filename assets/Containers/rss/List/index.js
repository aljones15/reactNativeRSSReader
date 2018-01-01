import React from 'react';
import { connect } from 'react-redux';
import { View, ListView, RefreshControl, Text } from 'react-native';
import { select_item, RESET_SKIP } from 'Services/redux/actions.js';
import { styles, growFlex } from 'Styles/styles.js';
import MainHeader from 'Components/headers/Base/';
import PaginateView from 'Components/buttons/Paginate/';
import { Item } from 'Components/items/item.js';
import Icon from 'react-native-vector-icons/EvilIcons';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

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

class RssList extends React.PureComponent{
  constructor(props){
    super(props);
  }  
  componentDidUpdate(){
    console.log('RssList -> componentDidUpdate');
    console.log(this.props);
  } 
  render(){
   if(this.props.empty){
      return(
  	<View style={styles.container} testID="rss_list">
          <View style={{marginTop: 35}} />
	  <View style={[styles.mainFeed, styles.flexCenterCol]}>
	    <Text>No Items</Text>
            <Icon name="undo" size={90} color="#080707" onPress={this.props.refresh} />
	    <Text>Refresh</Text> 
          </View> 
        </View>);
  } 
  return(
    <View style={ styles.container }>
      <ListView
      enableEmptySections={true}
      style={ styles.mainFeed }
      refreshControl={ <RefreshControl 
	    refreshing={this.props.loading} 
	    onRefresh={this.props.refresh} 
	    />  }
      dataSource={this.props.items}
      renderHeader={() => <MainHeader update={this.props.updateParent} />}
      renderRow={
        (rowData, sectionID, rowID, highlightRow) =>
          <Item 
            colorPicker={rowID} 
            item={rowData} 
            selectItem={this.props.updateParent} 
          />
      }
      renderFooter={() => <PaginateView update={this.props.updateParent} />}
      />
      {this.props.children} 
    </View>);
  }
}


const mapStateToProps = (state, props) => {
  console.log('RssList -> mapToProps');
  console.log(props);
  //const validRss = validateRss(state.items);
  return {
    items: ds.cloneWithRows(props.feeds.sort(sortByPubDate)),
    loading: props.loading,
    empty: props.feeds.length == 0 && !props.loading
  };
}

const dispatchToStore = (dispatch) => {
  return { }
}

export default connect(mapStateToProps, dispatchToStore)(RssList);
