import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import Icon from 'react-native-vector-icons/EvilIcons';
import { View, FlatList, Text } from 'react-native';
import { RssList } from '../assets/Containers/rss/List';
import { shallow } from 'enzyme';

describe('Shallow Render Tests', () => {
  it('Show an Empty List when empty is true', () => {
    const wrapper = shallow(<RssList items={[]} loading={false} empty={true} />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.is(View)).toBeTruthy();
    expect(wrapper.find(View).length).toEqual(3);
    expect(wrapper.find(Text).length).toEqual(2);
    expect(wrapper.find(Icon).length).toEqual(1);
   })
});
