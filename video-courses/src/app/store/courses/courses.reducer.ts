import { Action, createReducer, on } from '@ngrx/store';
import { COURSES_ACTIONS } from '.';
import { CoursesState, initialState } from './courses.state';

const coursesReducer = createReducer(
  initialState,
  on(
    COURSES_ACTIONS.fetchCoursesSuccess,
    (state, { courses }): CoursesState => ({ ...state, courses: courses })
  ),
  on(
    COURSES_ACTIONS.getCourseByIdSuccess,
    (state, { course }): CoursesState => ({ ...state, course: course })
  ),
  on(
    COURSES_ACTIONS.fetchCourseAuthorsSuccess,
    (state, { authors }): CoursesState => ({ ...state, authors: authors })
  ),
  on(
    COURSES_ACTIONS.createNewCourseSuccess,
    (state, { course }): CoursesState => ({ ...state, course: course })
  ),
  on(
    COURSES_ACTIONS.editCourseSuccess,
    (state, { course }): CoursesState => ({ ...state, course: course })
  ),
  on(
    COURSES_ACTIONS.deleteCourseSuccess,
    (state): CoursesState => ({ ...state })
  )
);

export const reducer = (
  state: CoursesState | undefined,
  action: Action
): CoursesState => coursesReducer(state, action);
