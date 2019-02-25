import { getElementsPath } from 'constants/apiPaths';
import { get } from 'api';

export function requestElements(params) {
  return get(getElementsPath(), {
    params: params,
  });
}
