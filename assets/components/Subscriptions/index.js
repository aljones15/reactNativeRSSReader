import React from 'react';
import {View, Text} from 'react-native';
import { getAllSubs } from 'Services/asyncStorage.js';
import { styles, growFlex, makeBorder } from 'Styles/styles.js';

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
  render(){
    return(
      <View style={styles.container, {paddingTop: 50}}>
        <Text>Subscriptions</Text>
      </View>    
    )
  }
}

export default Subscriptions;
