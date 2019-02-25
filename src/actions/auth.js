import { SubmissionError } from 'redux-form';
import { push } from 'connected-react-router';

import { dispatchRequest } from 'actions';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  MARK_AS_NOT_LOGGED,
  ACCEPT_INVITATION_REQUEST,
  ACCEPT_INVITATION_SUCCESS,
  ACCEPT_INVITATION_FAILURE
} from 'actionTypes';
import {
  sendLoginRequest,
  sendAcceptInvitationRequest,
  sendLogoutRequest,
} from 'api/auth';
import { getRootPath } from 'constants/paths';

export function logout() {
  return dispatchRequest({
    requestAction: LOGOUT_REQUEST,
    request: sendLogoutRequest,
    onSuccess: dispatch => {
      dispatch(push(getRootPath()));
      dispatch({ type: LOGOUT_SUCCESS });
    },
    onFailure: dispatch => {
      dispatch({ type: LOGOUT_FAILURE });
    },
  });
}

export function acceptInvitation(params) {
  return dispatchRequest({
    requestAction: ACCEPT_INVITATION_REQUEST,
    request: () => sendAcceptInvitationRequest(params),
    onSuccess: dispatch => {
      dispatch({ type: ACCEPT_INVITATION_SUCCESS });
      dispatch(push(getRootPath()));
    },
    onFailure: dispatch => {
      dispatch({ type: ACCEPT_INVITATION_FAILURE });
    },
  });
}

export function login(params) {
  return dispatchRequest({
    requestAction: LOGIN_REQUEST,
    request: () => sendLoginRequest(params),
    onSuccess: (dispatch, data, getState) => {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    },
    onFailure: (dispatch, error) => {
      dispatch({ type: LOGIN_FAILURE });

      if (error.response.data.error === 'invalid_grant') {
        throw new SubmissionError({
          email: 'errors.invalidLoginOrPassword',
          password: 'errors.invalidLoginOrPassword',
        });
      }
    },
  });
}

export function markAsLoggedIn() {
  return { type: LOGIN_SUCCESS };
}

export function markAsNotLoggedIn() {
  return { type: MARK_AS_NOT_LOGGED };
}
