import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as CoursesReducer from './courses/courses.reducer';
import { State } from './types/root-state.interface';

const reducers: ActionReducerMap<State> = {
  courses: CoursesReducer.reducer,
};

const metaReducers: MetaReducer<State>[] = [];

export { reducers, metaReducers };
