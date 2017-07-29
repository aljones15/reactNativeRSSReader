"use strict";
require("babel-polyfill");

import 'react-native';
import React from 'react';
import Switcher from './index.js';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({display: {main: 'RssFeed'}});
const renderer = new ShallowRenderer();

describe('it should render', ()=> {
  it('an RssFeed', () => {
    const Test = renderer.render(<Switcher store={store} main='RssFeed' />);
    expect(renderer.getRenderOutput()).not.toBe(null);
  })
  
  it('a Subscriptions Page', () => {
    const Test = renderer.render(<Switcher store={store} main='Subscriptions' />)
    expect(renderer.getRenderOutput()).not.toBe(null);  
  })
})
