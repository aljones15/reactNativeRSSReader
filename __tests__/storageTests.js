import { setItem, getItem, deleteItem } from '../assets/asyncStorage.js';

import React, { Component } from 'react';

import { View, Text } from 'react-native';

import renderer from 'react-test-renderer';


class TestSetStorage extends Component{
  componentWillMount(){
    setItem('test', 'test');
  }
  componentDidMount(){
   getItem('test').then((r) => {
      console.log("result! result!");
      console.log(r);
    });
  }
  render(){
    return(
      <View>
        <Text>
        </Text>
      </View>

    )
  }
};

it('should use storage', () => {
  const test = renderer.create(
    <TestSetStorage />
  );
})
