import React from 'react';
import { getAllSubs } from 'Services/asyncStorage.js';
import { View, FlatList, Text, Button } from 'react-native';
import RowItem from './item';
import Header from './header';
import {connect} from 'react-redux';
import changeSection from './actions';
import style from './style';
import throttle from 'lodash/throttle';

class Subscriptions extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      subscriptions: []
    };
  }
  componentDidMount() {
    getAllSubs().then((subs) => this.setState({subscriptions: subs}));
  }
  createKeys(item, index) {
    return index + Date.now();
  }
  createItem(item) {
    return(<RowItem {...item} />);
  }
  render(){
    return(
      <View style={style.container} testID="subscriptions_page">
        <Text style={style.title} testID="subscriptions_title">Subscriptions</Text>
        <FlatList
          data={this.state.subscriptions}
          keyExtractor={this.createKeys}
          renderItem={this.createItem}
          testID="subscriptions_list"
        />
        <Button
          title="Back"
          testID="subscriptions_back"
          onPress={() => this.props.changeSection("RssFeed")}
        />
      </View>  
    )
  }
}

const mapStateToProps = (nextState, props) => ({});
const dispatchToProps = (dispatch, props) => ({
  changeSection: throttle(changeSection(dispatch), 100)
});

export default connect(mapStateToProps, dispatchToProps)(Subscriptions);
