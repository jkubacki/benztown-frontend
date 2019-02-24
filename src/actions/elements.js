import { dispatchRequest } from 'actions';
import { requestElements } from 'api/elements';

import {
  REQUEST_ELEMENTS_FAILURE,
  REQUEST_ELEMENTS_REQUEST,
  REQUEST_ELEMENTS_SUCCESS,
} from 'actionTypes';

export function getElements() {
  return dispatchRequest({
    requestAction: REQUEST_ELEMENTS_REQUEST,
    request: () => requestElements(),
    onSuccess: (dispatch, payload) => {
      dispatch({ type: REQUEST_ELEMENTS_SUCCESS, payload: payload.data.data });
    },
    onFailure: REQUEST_ELEMENTS_FAILURE,
  });
}
