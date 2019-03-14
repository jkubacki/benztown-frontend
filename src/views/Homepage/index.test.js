import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HomepageUnwrapped as Homepage } from './index';

const props = { isLoggedIn: false };

it('renders without crashing when logged in', () => {
  const component = shallow(<Homepage {...props} isLoggedIn />);
  expect(toJson(component)).toMatchSnapshot();
});

it('renders without crashing when not logged in', () => {
  const component = shallow(<Homepage {...props} />);
  expect(toJson(component)).toMatchSnapshot();
});
