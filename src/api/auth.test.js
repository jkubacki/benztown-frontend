import axios from 'axios';
import queryString from 'query-string';
import {
  getOauthTokenPath,
  getInvitationsPath,
} from 'constants/apiPaths';
import { LocalStorage, SessionStorage } from 'utils/storage';
import {
  sendLoginRequest,
  refreshTokens,
  sendLogoutRequest,
  sendAcceptInvitationRequest,
} from './auth';

jest.mock('utils/storage', () => ({
  LocalStorage: {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
  },
  SessionStorage: {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
  },
}));

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve()),
  post: jest.fn(() =>
    Promise.resolve({
      data: {
        access_token: 'ACCESS_TOKEN',
        refresh_token: 'REFRESH_TOKEN',
      },
    }),
  ),
  interceptors: {
    request: {
      use: jest.fn(),
    },
    response: {
      use: jest.fn(),
    },
  },
}));

describe('auth API helpers', () => {
  const data = {
    access_token: 'ACCESS_TOKEN',
    refresh_token: 'REFRESH_TOKEN',
  };
  const header = {
    headers: {
      Accept: 'application/vnd.api+json',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Source-App': 'web',
    },
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Login request functions', () => {

    const email = 'email@example.com';
    const password = 'password';

    beforeEach(() => {
      axios.get.mockReturnValueOnce(Promise.resolve());
    });

    describe('sendLoginRequest', () => {
      it('saves tokens, using sessionStorage by default', () => {
        const resultLocal = LocalStorage.setItem;
        const resultSession = SessionStorage.setItem;

        return sendLoginRequest({ email, password }).then(() => {
          expect(resultLocal).not.toHaveBeenCalled();
          expect(resultLocal).toHaveBeenCalledTimes(0);
          expect(resultSession).toHaveBeenCalledWith(
            'token',
            data.access_token,
          );
          expect(resultSession).toHaveBeenCalledWith(
            'refresh_token',
            data.refresh_token,
          );
        });
      });

      it('uses localStorage if param rememberMe is true', () => {
        LocalStorage.getItem.mockImplementationOnce(() => 'true');

        return sendLoginRequest({ email, password, rememberMe: true }).then(
          () => {
            expect(LocalStorage.setItem).toHaveBeenCalledWith(
              'rememberMe',
              true,
            );
            expect(LocalStorage.setItem).toHaveBeenCalledTimes(3);
            expect(SessionStorage.setItem).not.toHaveBeenCalled();
          },
        );
      });

      it('should passes correct parameters', () => {
        const result = axios.post;

        return sendLoginRequest({ email, password }).then(() => {
          expect(result).toHaveBeenCalledTimes(1);
          expect(result).toHaveBeenCalledWith(getOauthTokenPath(), {
            grant_type: 'password',
            email,
            password,
          });
        });
      });
    });
  });

  describe('refreshTokens', () => {
    it('should not update LocalStorage', () => {
      return refreshTokens().then(() => {
        expect(LocalStorage.setItem).not.toHaveBeenCalled();
      });
    });

    it('should called getItem from LocalStorage', () => {
      return refreshTokens().then(() => {
        expect(LocalStorage.getItem).toHaveBeenCalledWith('refresh_token');
        expect(LocalStorage.getItem).toHaveBeenCalledWith('rememberMe');
        expect(LocalStorage.getItem).toHaveBeenCalledTimes(2);
      });
    });

    it('should called setItem from SessionStorage', () => {
      return refreshTokens().then(() => {
        expect(SessionStorage.setItem).toHaveBeenCalledWith(
          'refresh_token',
          data.refresh_token,
        );
        expect(SessionStorage.setItem).toHaveBeenCalledWith(
          'token',
          data.access_token,
        );
        expect(SessionStorage.setItem).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('sendLogoutRequest', () => {
    it('should clear LocalStorage', () => {
      return sendLogoutRequest().then(() => {
        expect(LocalStorage.removeItem).toHaveBeenCalledWith('refresh_token');
        expect(LocalStorage.removeItem).toHaveBeenCalledWith('rememberMe');
        expect(LocalStorage.removeItem).toHaveBeenCalledWith('token');
        expect(LocalStorage.removeItem).toHaveBeenCalledTimes(3);
      });
    });

    it('should clear SessionStorage', () => {
      return sendLogoutRequest().then(() => {
        expect(SessionStorage.removeItem).toHaveBeenCalledWith('refresh_token');
        expect(SessionStorage.removeItem).toHaveBeenCalledWith('token');
        expect(SessionStorage.removeItem).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('sendAcceptInvitationRequest', () => {
    it('should call post and passes correct data', () => {
      const invitationToken = 'confirmationToken';
      const password = 'password'
      const result = axios.post;

      return sendAcceptInvitationRequest({ invitation_token: invitationToken, password: password }).then(() => {
        expect(result).toHaveBeenCalledTimes(1);
        expect(result).toHaveBeenCalledWith(
          getInvitationsPath(),
          queryString.stringify({
            'password': password,
            'invitation_token': invitationToken,
          }),
          header,
        );
      });
    });
  });
});
