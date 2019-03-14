import { get } from 'api';
import { getElementsPath } from 'constants/apiPaths';

import requestElements from 'api/elements';

jest.mock('api', () => ({
  get: jest.fn(() => Promise.resolve()),
}));

describe('connections', () => {
  afterEach(() => { get.mockClear(); });

  describe('requestElements', () => {
    it('calls patch with correct arguments', () => {
      const params = { q: 'query' };

      const expected = [
        getElementsPath(),
        { params },
      ];

      const result = requestElements(params);

      result.then(() => {
        expect(get).toBeCalledWith(...expected);
      });
    });
  });
});
