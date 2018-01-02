import React from 'react';
import { getAllSubs } from 'Services/asyncStorage.js';
import { View, FlatList, Text } from 'react-native';
import RowItem from './item';
import Header from './header';
import {connect} from 'react-redux';
import changeSection from './actions';
import style from './style';

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
      <View style={style.container}>
        <Text style={style.title}>Subscriptions</Text>
        <FlatList
          data={this.state.subscriptions}
          keyExtractor={this.createKeys}
          renderItem={this.createItem}
        />
      </View>  
    )
  }
}

const mapStateToProps = (nextState, props) => ({});
const dispatchToProps = (dispatch, props) => ({
  changeSection: changeSection(dispatch)
});

export default connect(mapStateToProps, dispatchToProps)(Subscriptions);
