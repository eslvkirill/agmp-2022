import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as CoursesReducer from './courses/courses.reducer';
import * as UserReducer from './user/user.reducer';
import { State } from './root-state';

const reducers: ActionReducerMap<State> = {
  courses: CoursesReducer.reducer,
  user: UserReducer.reducer,
};

const metaReducers: MetaReducer<State>[] = [];

export { reducers, metaReducers };
