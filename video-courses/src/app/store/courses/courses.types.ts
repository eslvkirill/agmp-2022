import { getTypeActionName } from '../utils';

const COURSES_PREFIX = '[COURSES]';

const getCourseActionName = (typeName: string): string =>
  getTypeActionName(COURSES_PREFIX, typeName);

export const COURSES_TYPES = {
  COURSES_INIT: getCourseActionName('Courses Init'),
  COURSES_FETCH_SUCCESS: getCourseActionName('Fetch Courses Success'),
  GET_COURSE_BY_ID: getCourseActionName('Get Course By Id'),
  GET_COURSE_BY_ID_SUCCESS: getCourseActionName('Get Course By Id Success'),
  COURSE_AUTHORS_INIT: getCourseActionName('Course Authors Init'),
  COURSE_AUTHORS_FETCH_SUCCESS: getCourseActionName(
    'Fetch Course Authors Success'
  ),
  CREATE_NEW_COURSE: getCourseActionName('Create New Course'),
  CREATE_NEW_COURSE_SUCCESS: getCourseActionName('Create New Course Success'),
  EDIT_COURSE: getCourseActionName('Update Course'),
  EDIT_COURSE_SUCCESS: getCourseActionName('Update Course Success'),
  DELETE_COURSE: getCourseActionName('Delete Course'),
  DELETE_COURSE_SUCCESS: getCourseActionName('Delete Course Success'),
};
