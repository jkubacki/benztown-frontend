import { buildApiPath } from 'utils';

export const getOauthTokenPath = buildApiPath(() => '/oauth/token');
export const getElementsPath = buildApiPath(() => '/api/v1/elements');
