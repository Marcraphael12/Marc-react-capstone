import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';

import Navbar from '../Nav';

describe('Navigation', () => {
  it('renderers the navbar correctly', () => {
    const tree = renderer
      .create(
        <HashRouter>
          <Navbar />
        </ HashRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});