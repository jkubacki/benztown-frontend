import { buildApiPath } from 'utils';

export const getOauthTokenPath = buildApiPath(() => '/oauth/token');
export const getOauthRevokePath = buildApiPath(() => '/oauth/revoke');
export const getElementsPath = buildApiPath(() => '/api/v1/elements');
export const getInvitationsPath = buildApiPath(() => '/api/v1/invitations');
