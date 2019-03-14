import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { LogoutButtonUnwrapped as LogoutButton } from './LogoutButton';

const props = { logout: jest.fn(() => Promise.resolve()) };

describe('LogoutButton', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LogoutButton {...props} />);
  });

  it('should render corectly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render action button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should call logout when button is clicked', () => {
    const logoutButton = wrapper.find('button');
    logoutButton.simulate('click');

    expect(props.logout).toHaveBeenCalled();
  });
});
