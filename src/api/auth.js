import axios from 'axios';
import { post } from 'api';

import { getOauthTokenPath, getInvitationsPath, getOauthRevokePath } from 'constants/apiPaths';
import { LocalStorage, SessionStorage } from 'utils/storage';
import { getStorageItem } from 'utils';

function persistTokens(data) {
  const rememberMe = LocalStorage.getItem('rememberMe');
  const storage = rememberMe === 'true' ? LocalStorage : SessionStorage;

  storage.setItem('token', data.access_token);
  storage.setItem('refresh_token', data.refresh_token);
}

export function sendTokenRequest({ rememberMe = false, ...params }) {
  return axios
    .post(getOauthTokenPath(), params)
    .then((response) => {
      if (rememberMe) {
        LocalStorage.setItem('rememberMe', rememberMe);
      }
      persistTokens(response.data);

      return response;
    });
}

export function sendLoginRequest(params) {
  return sendTokenRequest({
    grant_type: 'password',
    ...params,
  });
}

export function sendLogoutRequest() {
  const token = getStorageItem('token');

  return new Promise((resolve, reject) => {
    axios
      .post(
        getOauthRevokePath(),
        { token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(() => {
        LocalStorage.removeItem('rememberMe');
        LocalStorage.removeItem('token');
        LocalStorage.removeItem('refresh_token');
        SessionStorage.removeItem('token');
        SessionStorage.removeItem('refresh_token');
        resolve();
      })
      .catch(reject);
  });
}

export function refreshTokens() {
  const refreshToken = getStorageItem('refresh_token');

  return axios
    .post(getOauthTokenPath(), {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    })
    .then((response) => {
      persistTokens(response.data);

      return response;
    });
}

export function sendAcceptInvitationRequest(params) {
  return post(getInvitationsPath(), params);
}
