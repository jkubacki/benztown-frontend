import { REQUEST_ELEMENTS_SUCCESS } from 'actionTypes';
import reducer from './elements';

const initialState = [];

describe('elements', () => {
  it('should should return initial state', () => {
    const result = reducer(undefined, {});

    expect(result).toEqual(initialState);
  });

  it('sets on REQUEST_ELEMENTS_SUCCESS store to payload', () => {
    const payload = [{ id: 1 }, { id: 2 }];
    const action = { type: REQUEST_ELEMENTS_SUCCESS, payload };
    const result = reducer({}, action);

    expect(result).toEqual(payload);
  });
});
