import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, MARK_AS_NOT_LOGGED,
} from 'actionTypes';
import ClientState from 'constants/clientState';

export const initialState = {
  state: ClientState.NOT_LOGGED_IN,
};

export default function client(state = initialState, { type }) {
  switch (type) {
    case LOGIN_REQUEST:
      return { state: ClientState.FETCHING };
    case LOGIN_SUCCESS:
      return { state: ClientState.LOGGED_IN };
    case LOGOUT_SUCCESS:
      return { state: ClientState.NOT_LOGGED_IN };
    case MARK_AS_NOT_LOGGED:
      return { state: ClientState.NOT_LOGGED_IN };
    default:
      return state;
  }
}
