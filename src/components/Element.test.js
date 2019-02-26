import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Element } from './Element';

const props = { element: { attributes: { name: 'Element name', tag_list: ['tag1', 'tag2', 'tag3'] } } };

it('renders without crashing', () => {
  const component = shallow(<Element {...props} isLoggedIn />);
  expect(toJson(component)).toMatchSnapshot();
});
