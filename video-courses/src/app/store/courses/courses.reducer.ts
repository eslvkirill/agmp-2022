import { Action, createReducer, on } from '@ngrx/store';

import { COURSES_ACTIONS } from './courses.action';
import { CoursesState, initialState } from './courses.state';

const coursesReducer = createReducer(
  initialState,
  on(
    COURSES_ACTIONS.fetchCoursesSuccess,
    (state, { courses }): CoursesState => ({
      ...state,
      courses: courses,
    })
  )
);

export const reducer = (
  state: CoursesState | undefined,
  action: Action
): CoursesState => coursesReducer(state, action);
