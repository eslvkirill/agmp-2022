import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CoursesState } from './courses.state';

const selectCourses = createFeatureSelector<CoursesState>('courses');

export const selectAllCourses = createSelector(
  selectCourses,
  (state: CoursesState) => state.courses
);
