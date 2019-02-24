import { getWindow } from 'utils/main';
import { CookieStorage } from 'cookie-storage';
import noop from 'lodash.noop';

const LOCAL_STORAGE = 'localStorage';
const SESSION_STORAGE = 'sessionStorage';

const mock = {
  setItem: noop,
  getItem: noop,
};

export function getStorage(type) {
  try {
    const TEST_VALUE = 'test';
    getWindow().localStorage.setItem(TEST_VALUE, TEST_VALUE);
    getWindow().localStorage.removeItem(TEST_VALUE);

    return getWindow()[type];
  } catch (err) {
    return getWindow().localStorage ? new CookieStorage() : mock;
  }
}

export const LocalStorage = getStorage(LOCAL_STORAGE);
export const SessionStorage = getStorage(SESSION_STORAGE);
