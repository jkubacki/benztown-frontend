import { getElementsPath } from 'constants/apiPaths';
import { get } from 'api';

export function requestElements() {
  return get(getElementsPath());
}
