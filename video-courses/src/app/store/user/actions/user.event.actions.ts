import { createAction, props } from '@ngrx/store';
import { USER_TYPES } from '../user.types';
import { UserInfo } from 'src/app/shell/header/types';

const loginError = createAction(
  USER_TYPES.LOGIN_ERROR,
  props<{ errorMessage: string }>()
);

const getUserInfoSuccess = createAction(
  USER_TYPES.GET_USER_INFO_SUCCESS,
  props<{ userInfo: UserInfo }>()
);

const getAuthTokenSuccess = createAction(
  USER_TYPES.GET_AUTH_TOKEN_SUCCESS,
  props<{ token: string | null }>()
);

export { loginError, getUserInfoSuccess, getAuthTokenSuccess };
