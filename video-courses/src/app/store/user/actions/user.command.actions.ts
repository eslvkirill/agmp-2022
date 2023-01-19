import { createAction, props } from '@ngrx/store';

import { USER_TYPES } from '../user.types';

const getUserInfo = createAction(
  USER_TYPES.GET_USER_INFO,
  props<{ token: string | null }>()
);

export { getUserInfo };
