import React from 'react';
import renderer from 'react-test-renderer';
import Countries from '../countries/Countries';
import { HashRouter } from 'react-router-dom';

const mockedData = {
  Benin: {
    new_cases: 4,
    death: 0,
    today_confirmed: 24850,
  },
};

const mockedTotalCases = {
  today_confirmed: 33868,
  today_new_confirmed: 6753375,
  today_deaths: 575238,
};

describe('Countries', () => {
  it('renders ! ', () => {
    const tree = renderer
      .create(
        <HashRouter>
        <Countries
          countries={mockedData}
          total={mockedTotalCases}
          loading={false}
          handleClick={() => 7 + 5}
        />
        </HashRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});