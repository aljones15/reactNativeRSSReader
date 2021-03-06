import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles, growFlex, makeBorder } from 'Styles/styles.js';
import { connect } from 'react-redux';
import { TOGGLE_MODAL, ADD_FEED } from 'Services/redux/actions.js';
import { refreshFeeds } from 'Services/rssService.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addUrl, getAllSubs } from 'Services/asyncStorage.js';
import ModalMenu from './modalMenu.js';
import ModalFeed from './modalFeed.js';


/**
 * FeedModal - appears at the top of the feed list
 * controls the Menu and Add buttons
 */

class FeedModal extends React.PureComponent {
  constructor(props){
    super(props)
  }
  render(){
    if(!this.props.menu)
      return null;
    switch(this.props.section){
      case "menu":
        return(<ModalMenu />);
      case "new_feed":
        return(<ModalFeed submit={this.props.submit} />);
      default:
        return null;
    }
  }
}

const mapStateToProps = ({display}, props) => {
  return { ...display };
}

const dispatchToStore = (dispatch, {update}) => {
  return {
    close: (modal_name) => (event) => dispatch({type: TOGGLE_MODAL}),
    submit: (input) => (e) => {
      if (input) {
        addUrl(input);
        dispatch({
          type: ADD_FEED,
          url: input
        });
        refreshFeeds(update);
      }
      dispatch({type: TOGGLE_MODAL});
    }
  }
};

export default connect(mapStateToProps, dispatchToStore)(FeedModal)
