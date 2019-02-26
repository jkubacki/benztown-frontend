import { push } from 'connected-react-router';

import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ACCEPT_INVITATION_REQUEST,
  ACCEPT_INVITATION_SUCCESS,
  ACCEPT_INVITATION_FAILURE,
} from 'actionTypes';
import {
  sendLogoutRequest,
  sendAcceptInvitationRequest,
  sendLoginRequest,
} from 'api/auth';
import { getRootPath } from 'constants/paths';

import { logout, acceptInvitation, login } from './auth';

jest.mock('api/auth', () => ({
  sendLogoutRequest: jest.fn(),
  sendAcceptInvitationRequest: jest.fn(),
  sendLoginRequest: jest.fn(),
}));
jest.mock('connected-react-router', () => ({
  push: jest.fn(),
}));

describe('login', () => {
  const dispatch = jest.fn();
  beforeEach(jest.clearAllMocks);

  it('login(): success', () => {
    const data = {
      access_token: 'access_token',
      token_type: 'Bearer',
      expires_in: 7200,
      refresh_token: 'refresh_token',
      created_at: 1551160769
    }
    const payload = {
      data: data,
      status: 200,
      statusText: "OK"
    };
    sendLoginRequest.mockReturnValueOnce(Promise.resolve(payload));

    return login()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: LOGIN_REQUEST,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: LOGIN_SUCCESS,
        payload: payload
      });
    });
  });

  it('login(): failure', () => {
    sendLoginRequest.mockReturnValueOnce(Promise.reject({response: { data: { error: 'error' } } }));

    return login()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: LOGIN_REQUEST,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: LOGIN_FAILURE
      });
    });
  });
});

describe('acceptInvitation: success', () => {
  const dispatch = jest.fn();
  beforeEach(jest.clearAllMocks);

  it('acceptInvitation(): success', () => {
    sendAcceptInvitationRequest.mockReturnValueOnce(Promise.resolve());

    return acceptInvitation()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: ACCEPT_INVITATION_REQUEST,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: ACCEPT_INVITATION_SUCCESS
      });
      expect(push).toBeCalledWith(getRootPath());
    });
  });

  it('acceptInvitation(): failure', () => {
    sendAcceptInvitationRequest.mockReturnValueOnce(Promise.reject({response: { data: null } }));

    return acceptInvitation()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: ACCEPT_INVITATION_REQUEST,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: ACCEPT_INVITATION_FAILURE
      });
    });
  });
});

describe('logout', () => {
  const dispatch = jest.fn();
  beforeEach(jest.clearAllMocks);

  it('logout(): success', () => {
    sendLogoutRequest.mockReturnValueOnce(Promise.resolve());

    return logout()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: LOGOUT_REQUEST,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: LOGOUT_SUCCESS
      });
      expect(push).toBeCalledWith(getRootPath());
    });
  });

  it('logout(): failure', () => {
    sendLogoutRequest.mockReturnValueOnce(Promise.reject());

    return logout()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: LOGOUT_REQUEST,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: LOGOUT_FAILURE
      });
    });
  });
});
