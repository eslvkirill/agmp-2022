import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.state';

const selectCourses = createFeatureSelector<CoursesState>('courses');

const selectAllCourses = createSelector(
  selectCourses,
  (state: CoursesState) => state.courses
);

const selectCourseById = createSelector(
  selectCourses,
  (state: CoursesState) => state.course
);

const selectCourseAuthors = createSelector(
  selectCourses,
  (state: CoursesState) => state.authors
);

export { selectAllCourses, selectCourseById, selectCourseAuthors };
