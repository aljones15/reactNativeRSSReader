import React from 'react';
import { getAllSubs } from 'Services/asyncStorage.js';
import { styles, growFlex, makeBorder } from 'Styles/styles.js';
import { View, ListView, RefreshControl, Text } from 'react-native';
import RowItem from './item';
import Header from './header';
import {connect} from 'react-redux';
import { SWITCH_MAIN } from 'Services/redux/actions';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

class Subscriptions extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      subscriptions: ds.cloneWithRows([])
    };
  }
  componentDidMount() {
    getAllSubs().then((subs) => this.setState({subscriptions: ds.cloneWithRows(subs)}));
  }
  render(){
    return(
      <View style={styles.container, {paddingTop: 25}}>
        <Text>Subscriptions</Text>
        <ListView
          enableEmptySections={true}
          renderHeader={() => <Header />}
          dataSource={this.state.subscriptions}
          renderRow={(rowData) => <RowItem url={rowData} />}
        />
      </View>  
    )
  }
}

const mapStateToProps = (nextState, props) => ({});
const dispatchToProps = (dispatch, props) => ({
  changeSection: (section) => dispatch(type: SWITCH_MAIN, payload: section)
});

export default connect(mapStateToProps, dispatchToProps)(Subscriptions);
