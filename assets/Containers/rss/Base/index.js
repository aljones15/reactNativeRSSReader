import React from 'react';
import { connect } from 'react-redux';
import { View, Text  } from 'react-native';
import { styles, growFlex, flatten } from 'Styles/styles.js';
import ItemView from 'Components/items/itemView.js';
import { initFeeds } from 'Services/asyncStorage.js';
import RssList from '../List/';
import { refreshFeeds } from 'Services/rssService.js';

function validateRss(s){
    if(s && s.rss && s.rss.query && s.rss.query.results && s.rss.query.results.item){
      return s.rss.query.results.item.length;
    }
    return false;
}


/**
*  RssBase is the main component for displaying the RSS feeds
*/
class RssBase extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {loading: false, item: null, feeds: []}
  }
  async componentDidMount(){
    await initFeeds(this.callBack.bind(this))
  }
  back(){
    this.setState({item: null});
  }
  callBack(action){
    console.log('callBack Base ->');
    console.log(action);
    this.setState(action);
  }
  componentDidUpdate(){
  }
  render(){
    if(this.state.item){
      return(
        <ItemView 
          item={this.state.item} 
          back={this.back.bind(this)} 
      />);
    }
    return(
      <RssList 
        loading={this.state.loading} 
        feeds={this.state.feeds} 
        refresh={() => refreshFeeds(this.callBack.bind(this))}
        updateParent={this.callBack.bind(this)}
      />)
 }
}

// all we need are the items
const mapStateToProps = ({items}, props) => {
  return {
    ...items
  };
}

const dispatchToStore = (dispatch) => {
  return { }
}

export default connect(mapStateToProps, dispatchToStore)(RssBase);
