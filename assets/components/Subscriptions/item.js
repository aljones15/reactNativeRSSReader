import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

const Item = ({index, item, seperators}) => {
  return(
    <Text style={style.item}>
       {item}
    </Text>
  );
};

export default Item;
