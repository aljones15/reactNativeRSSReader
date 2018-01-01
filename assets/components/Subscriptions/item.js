import React from 'react';
import { styles, growFlex, makeBorder } from 'Styles/styles.js';
import { View, Text } from 'react-native';

const Item = ({url}) => {
  return(
    <Text>
       {url}
    </Text>
  );
};

export default Item;
