import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, MARK_AS_NOT_LOGGED,
} from 'actionTypes';
import ClientState from 'constants/clientState';
import reducer, { initialState } from './client';

describe('client', () => {
  it('should should return initial state', () => {
    const result = reducer(undefined, {});

    expect(result).toEqual(initialState);
  });

  it('sets on LOGIN_REQUEST state to fetching', () => {
    const action = { type: LOGIN_REQUEST };
    const result = reducer({}, action);

    expect(result).toEqual({ state: ClientState.FETCHING });
  });

  it('sets on LOGIN_SUCCESS state to logged in', () => {
    const action = { type: LOGIN_SUCCESS };
    const result = reducer({}, action);

    expect(result).toEqual({ state: ClientState.LOGGED_IN });
  });

  it('sets on LOGOUT_SUCCESS state to logged in', () => {
    const action = { type: LOGOUT_SUCCESS };
    const result = reducer({}, action);

    expect(result).toEqual({ state: ClientState.NOT_LOGGED_IN });
  });

  it('sets on MARK_AS_NOT_LOGGED state to logged in', () => {
    const action = { type: MARK_AS_NOT_LOGGED };
    const result = reducer({}, action);

    expect(result).toEqual({ state: ClientState.NOT_LOGGED_IN });
  });
});
