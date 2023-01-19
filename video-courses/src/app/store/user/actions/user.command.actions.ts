import { createAction, props } from '@ngrx/store';

import { USER_TYPES } from '../user.types';

const getUserInfo = createAction(
  USER_TYPES.GET_USER_INFO,
  props<{ token: string | null }>()
);

// const initCourseAuthors = createAction(COURSES_TYPES.COURSE_AUTHORS_INIT);

// const createNewCourse = createAction(
//   COURSES_TYPES.CREATE_NEW_COURSE,
//   props<{ course: CourseInfo }>()
// );

// const editCourse = createAction(
//   COURSES_TYPES.EDIT_COURSE,
//   props<{ course: CourseInfo }>()
// );

// const deleteCourse = createAction(
//   COURSES_TYPES.DELETE_COURSE,
//   props<{ id: number }>()
// );

export { getUserInfo };
