import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AppHeaderUnwrapped as AppHeader } from './AppHeader';

const props = { isLoggedIn: false };

it('renders without crashing when logged in', () => {
  const component = shallow(<AppHeader {...props} isLoggedIn />);
  expect(toJson(component)).toMatchSnapshot();
});

it('renders without crashing when not logged in', () => {
  const component = shallow(<AppHeader {...props} />);
  expect(toJson(component)).toMatchSnapshot();
});
