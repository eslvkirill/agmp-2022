import { Action, createReducer, on } from '@ngrx/store';

import { USER_ACTIONS } from '.';
import { initialState, UserState } from './user.state';

const userReducer = createReducer(
  initialState,
  on(
    USER_ACTIONS.getUserInfoSuccess,
    (state, { userInfo }): UserState => ({ ...state, userInfo: userInfo })
  ),
  on(USER_ACTIONS.login, (state): UserState => ({ ...state })),
  on(USER_ACTIONS.logoutUser, (state): UserState => ({ ...state })),
  on(
    USER_ACTIONS.setAuthenticated,
    (state, { isAuthenticated }): UserState => ({
      ...state,
      isAuthenticated: isAuthenticated,
    })
  ),
  on(
    USER_ACTIONS.getAuthTokenSuccess,
    (state, { token }): UserState => ({ ...state, token: token })
  ),
  on(
    USER_ACTIONS.setAuthToken,
    (state, { token }): UserState => ({ ...state, token: token })
  )
);

export const reducer = (
  state: UserState | undefined,
  action: Action
): UserState => userReducer(state, action);
