import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './user.state';

const selectUser = createFeatureSelector<UserState>('user');

const selectUserName = createSelector(selectUser, (state: UserState) => {
  if (!state.userInfo) return;
  const { first, last } = state.userInfo.name;
  return `${first} ${last}`;
});

const selectUserToken = createSelector(
  selectUser,
  (state: UserState) => state.token
);

const selectAuthenticatedFlag = createSelector(
  selectUser,
  (state: UserState) => state.isAuthenticated
);

export { selectUserName, selectUserToken, selectAuthenticatedFlag };
