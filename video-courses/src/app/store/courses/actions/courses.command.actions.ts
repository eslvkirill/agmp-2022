import { createAction, props } from '@ngrx/store';
import { CourseInfo } from 'src/app/features/courses/types';

import { COURSES_TYPES } from '../courses.types';

const getCoursebyId = createAction(
  COURSES_TYPES.GET_COURSE_BY_ID,
  props<{ id: number }>()
);

const initCourseAuthors = createAction(COURSES_TYPES.COURSE_AUTHORS_INIT);

const createNewCourse = createAction(
  COURSES_TYPES.CREATE_NEW_COURSE,
  props<{ course: CourseInfo }>()
);

const editCourse = createAction(
  COURSES_TYPES.EDIT_COURSE,
  props<{ course: CourseInfo }>()
);

const deleteCourse = createAction(
  COURSES_TYPES.DELETE_COURSE,
  props<{ id: number }>()
);

export {
  getCoursebyId,
  initCourseAuthors,
  createNewCourse,
  editCourse,
  deleteCourse,
};
