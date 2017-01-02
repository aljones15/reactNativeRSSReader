import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text  } from 'react-native';
import { RSS_UPDATE, UPDATE_ITEMS_FAILED, getRssFeeds } from '../../actions.js';
import { styles, growFlex, flatten } from '../../Styles/styles.js';
import ItemView from '../items/itemView.js';
import MainHeader from '../headers/mainHeader.js';
import FeedModal from '../modal/modal.js';
import Loading from '../modal/loading.js';
import { addUrl, getAllSubs, initFeeds } from '../../Services/asyncStorage.js';
import RssList from './RssList.js';


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
    return(<RssList />)
 }
}

const mapStateToProps = (state, props) => {

  return {
    item: state.reduceItems.item,
    loading: state.reduceItems.network_update
  };
}

const dispatchToStore = (dispatch) => {
  return { 
    init: initFeeds(dispatch) 
  }
}

export default connect(mapStateToProps, dispatchToStore)(RssBase);
