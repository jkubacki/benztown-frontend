import { getElementsPath } from 'constants/apiPaths';
import { get } from 'api';

export default function requestElements(params) {
  return get(getElementsPath(), { params });
}
