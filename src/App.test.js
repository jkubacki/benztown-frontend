import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AppUnwrapped as App } from 'App';

const props = {
  markAsLoggedIn: jest.fn(),
  markAsNotLoggedIn: jest.fn(),
  history: { push: jest.fn(), location: { search: '' } },
  match: {},
};

it('renders without crashing', () => {
  const component = shallow(<App {...props} />);

  expect(toJson(component)).toMatchSnapshot();
});
