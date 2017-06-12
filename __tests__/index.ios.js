"use strict";
import 'react-native';
import React from 'react';
import Root from '../assets/components/root.js';
import { mockResponse } from 'jest-fetch-mock';
require("babel-polyfill");
const mockStorage = require('mock-async-storage');

// Note: test renderer must be required after react-native.

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

it('renders correctly', () => {
  mockStorage.mock();
  mockResponse(JSON.stringify([]));
  const tree = renderer.render(
    <Root />
  );
  expect(renderer.getRenderOutput()).not.toBe(null);

});
