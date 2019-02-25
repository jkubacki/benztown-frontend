import axios from 'axios';
import { post } from 'api';

import { getOauthTokenPath, getInvitationsPath } from 'constants/apiPaths';
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
    .then(response => {
      if (rememberMe) {
        LocalStorage.setItem('rememberMe', rememberMe);
      }
      persistTokens(response.data);

      return response;
    })
}

export function sendLoginRequest(params) {
  return sendTokenRequest({
    grant_type: 'password',
    ...params,
  });
}

export function refreshTokens() {
  const refreshToken = getStorageItem('refresh_token');

  return axios
    .post(getOauthTokenPath(), {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    })
    .then(response => {
      persistTokens(response.data);

      return response;
    });
}

export function sendAcceptInvitationRequest(params) {
  return post(getInvitationsPath(), params)
}
