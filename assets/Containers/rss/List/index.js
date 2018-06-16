import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text } from 'react-native';
import { select_item, RESET_SKIP } from 'Services/redux/actions.js';
import { styles, growFlex } from 'Styles/styles.js';
import MainHeader from 'Components/headers/Base/';
import PaginateView from 'Components/buttons/Paginate/';
import { Item } from 'Components/items/item.js';
import Icon from 'react-native-vector-icons/EvilIcons';
import { sortByPubDate } from 'Services/filters';

/**
 * RssList - contains the header and items for the view
 */
export class RssList extends React.PureComponent{
  constructor(props){
    super(props);
  }
   _keyExtractor(item, index) {
    return String(index + item.index);
  } 
  render(){
   if(this.props.empty){
      return(
  	<View style={styles.container} testID="rss_list_empty">
          <View style={{marginTop: 35}} />
	  <View style={[styles.mainFeed, styles.flexCenterCol]}>
	    <Text>No Items</Text>
            <Icon name="undo" size={90} color="#080707" onPress={this.props.refresh} />
	    <Text>Refresh</Text> 
          </View> 
        </View>);
  }
  return(
    <View style={ styles.container } testID='RssList'>
      <FlatList
        testID='rss_list_populated'
        style={ styles.mainFeed }
        refreshing={this.props.loading} 
	onRefresh={this.props.refresh}
        keyExtractor={this._keyExtractor}
        data={this.props.items}
        ListHeaderComponent={() => <MainHeader update={this.props.updateParent} />}
        renderItem={
        (item) =>
          <Item 
            colorPicker={item.index} {...item} 
            selectItem={this.props.updateParent} 
          />
      }
      ListFooterComponent={() => <PaginateView update={this.props.updateParent} />}
      />
      {this.props.children} 
    </View>);
  }
}


const mapStateToProps = (state, props) => {
  return {
    items: props.feeds.sort(sortByPubDate),
    loading: props.loading,
    empty: props.feeds.length == 0 && !props.loading
  };
}

const dispatchToStore = (dispatch) => {
  return { }
}

export default connect(mapStateToProps, dispatchToStore)(RssList);
