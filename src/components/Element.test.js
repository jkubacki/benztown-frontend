import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Element from 'components/Element';

const props = {
  element: {
    attributes: {
      name: 'Element name',
      file: 'file.mp3',
      tag_list: ['tag1', 'tag2', 'tag3'],
    },
  },
};

it('renders without crashing', () => {
  const component = shallow(<Element {...props} isLoggedIn />);
  expect(toJson(component)).toMatchSnapshot();
});
