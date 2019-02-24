import { REQUEST_ELEMENTS_SUCCESS } from 'actionTypes';

const initialState = [];

export default function client(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_ELEMENTS_SUCCESS:
      return payload;
    default:
      return state;
  }
}
