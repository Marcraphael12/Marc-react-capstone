/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../Nav';

describe('Navigation', () => {
  it('renderers route correctly', () => {
    const tree = renderer
      .create(
				<Navbar />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});