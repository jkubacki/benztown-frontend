import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { LoginForm } from 'components/LoginForm';

const props = {
  login: jest.fn(() => Promise.resolve()),
  handleSubmit: jest.fn(x => x),
};

describe('LoginForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginForm {...props} />);
  });

  it('should render corectly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render action button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should render form', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render 3 Field Component', () => {
    expect(wrapper.find('Field').length).toEqual(3);
  });

  it('should render email', () => {
    expect(wrapper.find('Field[name="email"]').length).toEqual(1);
  });

  it('should render password', () => {
    expect(wrapper.find('Field[name="password"]').length).toEqual(1);
  });

  it('should render checkbox', () => {
    expect(wrapper.find('Field[name="remember"]').length).toEqual(1);
  });

  it('should call login with correct input values', () => {
    const instance = wrapper.instance();

    instance.handleSubmit({
      email: 'admin@netguru.pl',
      password: 'adminadmin',
      remember: true,
    });

    expect(props.login).toHaveBeenCalledWith({
      username: 'admin@netguru.pl',
      password: 'adminadmin',
      rememberMe: true,
    });
  });
});
