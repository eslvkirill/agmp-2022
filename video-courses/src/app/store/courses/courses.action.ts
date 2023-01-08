import { createAction, props } from '@ngrx/store';
import { CourseInfo } from 'src/app/courses/types';

import { COURSES_TYPES } from './courses.types';

const coursesInit = createAction(COURSES_TYPES.COURSES_INIT);

const fetchCoursesSuccess = createAction(
  COURSES_TYPES.COURSES_FETCH_SUCCESS,
  props<{ courses: CourseInfo[] }>()
);

export const COURSES_ACTIONS = {
  coursesInit,
  fetchCoursesSuccess,
};
