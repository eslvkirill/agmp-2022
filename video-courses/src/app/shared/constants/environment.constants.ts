const START_PAGE_URL = '/';
const BACKEND_URL = 'http://localhost:3004';

const ENDPOINT = {
  AUTH: 'auth',
  COURSES: 'courses',
  AUTHORS: 'authors',
};

const NEW_COURSE = {
  ID: 'new',
  TITLE: 'New Course',
};

const PAGINATION = {
  SIZE: 5,
  START_NUMBER: 0,
};

const SORT_DATE = 'date';

const SEARCH_OPTIONS = {
  DEBOUNCE: 1000,
  MIN_LENGTH: 3,
};

export {
  START_PAGE_URL,
  BACKEND_URL,
  ENDPOINT,
  NEW_COURSE,
  PAGINATION,
  SORT_DATE,
  SEARCH_OPTIONS,
};
