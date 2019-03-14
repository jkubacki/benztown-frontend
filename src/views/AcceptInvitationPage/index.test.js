import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { acceptInvitation } from 'actions/auth';
import { AcceptInvitationPageUnwrapped as AcceptInvitationPage } from './index';

jest.mock('actions/auth', () => ({
  acceptInvitation: jest.fn(() => Promise.resolve()),
}));

const props = {
  acceptInvitation,
  invitation_token: 'invitation_token',
  handleSubmit: jest.fn(x => x),
};

describe('AcceptInvitationPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AcceptInvitationPage {...props} />);
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

  it('should render 1 Field Component', () => {
    expect(wrapper.find('Field').length).toEqual(1);
  });

  it('should render password', () => {
    expect(wrapper.find('Field[name="password"]').length).toEqual(1);
  });

  it('should call acceptInvitation with correct input values and with invitation token', () => {
    const instance = wrapper.instance();

    instance.handleSubmit({
      invitation_token: 'invitation_token',
      password: 'password',
    });

    expect(acceptInvitation).toHaveBeenCalledWith({
      invitation_token: 'invitation_token',
      password: 'password',
    });
  });
});
