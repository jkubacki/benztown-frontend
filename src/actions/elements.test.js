import {
  REQUEST_ELEMENTS_FAILURE,
  REQUEST_ELEMENTS_REQUEST,
  REQUEST_ELEMENTS_SUCCESS,
} from 'actionTypes';
import requestElements from 'api/elements';

import getElements from 'actions/elements';

jest.mock('api/elements', () => jest.fn());

describe('elements', () => {
  const dispatch = jest.fn();
  beforeEach(jest.clearAllMocks);

  it('getElements(): success', () => {
    const data = {
      data: [
        { id: 1, attributes: { name: 'Element name1', tag_list: ['tag1', 'tag2', 'tag3'] } },
        { id: 2, attributes: { name: 'Element name2', tag_list: ['tag2', 'tag3', 'tag4'] } },
      ],
    };
    requestElements.mockReturnValueOnce(Promise.resolve({ data }));

    return getElements()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: REQUEST_ELEMENTS_REQUEST,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: REQUEST_ELEMENTS_SUCCESS,
        payload: data.data,
      });
    });
  });

  it('getElements(): failure', () => {
    requestElements.mockReturnValueOnce(Promise.reject());

    return getElements()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: REQUEST_ELEMENTS_REQUEST,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: REQUEST_ELEMENTS_FAILURE,
      });
    });
  });
});
