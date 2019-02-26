import { push } from 'connected-react-router';

import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from 'actionTypes';
import {
  sendLogoutRequest,
} from 'api/auth';
import { getRootPath } from 'constants/paths';

import { logout } from './auth';

jest.mock('api/auth', () => ({
  sendLogoutRequest: jest.fn(),
}));
jest.mock('connected-react-router', () => ({
  push: jest.fn(),
}));

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
