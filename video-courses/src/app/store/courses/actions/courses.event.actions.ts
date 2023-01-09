import { createAction, props } from '@ngrx/store';
import { AuthorsInfo, CourseInfo } from 'src/app/courses/types';

import { COURSES_TYPES } from '../courses.types';

const fetchCoursesSuccess = createAction(
  COURSES_TYPES.COURSES_FETCH_SUCCESS,
  props<{ courses: CourseInfo[] }>()
);

const getCourseByIdSuccess = createAction(
  COURSES_TYPES.GET_COURSE_BY_ID_SUCCESS,
  props<{ course: CourseInfo }>()
);

const fetchCourseAuthorsSuccess = createAction(
  COURSES_TYPES.COURSE_AUTHORS_FETCH_SUCCESS,
  props<{ authors: AuthorsInfo[] }>()
);

const createNewCourseSuccess = createAction(
  COURSES_TYPES.CREATE_NEW_COURSE_SUCCESS,
  props<{ course: CourseInfo }>()
);

const editCourseSuccess = createAction(
  COURSES_TYPES.EDIT_COURSE_SUCCESS,
  props<{ course: CourseInfo }>()
);

const deleteCourseSuccess = createAction(COURSES_TYPES.DELETE_COURSE_SUCCESS);

export {
  fetchCoursesSuccess,
  getCourseByIdSuccess,
  fetchCourseAuthorsSuccess,
  createNewCourseSuccess,
  editCourseSuccess,
  deleteCourseSuccess,
};
