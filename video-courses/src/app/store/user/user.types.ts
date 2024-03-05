import { getTypeActionName } from '../utils';

const USER_PREFIX = '[USER]';

const getUserActionName = (typeName: string): string =>
  getTypeActionName(USER_PREFIX, typeName);

export const USER_TYPES = {
  LOGIN: getUserActionName('Login'),
  LOGOUT_USER: getUserActionName('Logout User'),
  USER_AUTHENTICATED: getUserActionName('User Authenticated'),
  USER_SET_AUTHENTICATED: getUserActionName('User Set Authenticated'),
  GET_AUTH_TOKEN: getUserActionName('Get Auth Token'),
  GET_AUTH_TOKEN_SUCCESS: getUserActionName('Get Auth Token Success'),
  SET_AUTH_TOKEN: getUserActionName('Set Auth Token'),
  GET_USER_INFO: getUserActionName('Get User Info'),
  GET_USER_INFO_SUCCESS: getUserActionName('Get User Info Success'),
};
