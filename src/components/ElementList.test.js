import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ElementList } from './ElementList';

const props = {
  getElements: jest.fn(),
  elements: [
    { id: 1, attributes: { name: 'Element name1', file: 'file.mp3', tag_list: ['tag1', 'tag2', 'tag3'] } },
    { id: 2, attributes: { name: 'Element name2', file: 'file.mp3', tag_list: ['tag2', 'tag3', 'tag4'] } },
  ],
};

it('renders without crashing', () => {
  const component = shallow(<ElementList {...props} isLoggedIn />);
  expect(toJson(component)).toMatchSnapshot();
});
