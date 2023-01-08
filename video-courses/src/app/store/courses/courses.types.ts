import { getTypeActionName } from '../utils';

const COURSES_PREFIX = '[COURSES]';

const getCourseActionName = (typeName: string): string =>
  getTypeActionName(COURSES_PREFIX, typeName);

export const COURSES_TYPES = {
  COURSES_INIT: getCourseActionName('Courses Init'),
  COURSES_FETCH_SUCCESS: getCourseActionName('Fetch Courses Success'),
};
