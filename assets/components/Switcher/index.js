import React from 'react';
import {connect} from 'react-redux';
import RssFeed from 'Containers/rss/Base/';
import Subscriptions from 'Components/Subscriptions/';

class Switcher extends React.PureComponent {
  constructor(props){
    super(props);
  }
  render(){
    switch(this.props.main){
      case 'RssFeed':
        return(<RssFeed />);
      case 'Subscriptions':
        return(<Subscriptions />);
      default:
        return(<RssFeed />);
    }
  }
}

const mapToProps = ({display}, props) => {
  return { ...display };
};
const dispatchToProps = (dispatch) => ({})
export default connect(mapToProps, dispatchToProps)(Switcher);
