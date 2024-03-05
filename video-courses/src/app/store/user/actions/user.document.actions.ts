import { createAction, props } from '@ngrx/store';
import { LoginInfo } from 'src/app/shell/header/types';
import { USER_TYPES } from '../user.types';

const login = createAction(USER_TYPES.LOGIN, props<{ loginInfo: LoginInfo }>());

const logoutUser = createAction(USER_TYPES.LOGOUT_USER);

const isAuthenticated = createAction(USER_TYPES.USER_AUTHENTICATED);

const setAuthenticated = createAction(
  USER_TYPES.USER_SET_AUTHENTICATED,
  props<{ isAuthenticated: boolean }>()
);

const getAuthToken = createAction(USER_TYPES.GET_AUTH_TOKEN);

const setAuthToken = createAction(
  USER_TYPES.SET_AUTH_TOKEN,
  props<{ token: string }>()
);

export {
  login,
  logoutUser,
  isAuthenticated,
  setAuthenticated,
  getAuthToken,
  setAuthToken,
};
