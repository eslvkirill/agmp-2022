import { createAction, props } from '@ngrx/store';
import { COURSES_TYPES } from '../courses.types';

export const coursesInit = createAction(
  COURSES_TYPES.COURSES_INIT,
  props<{ courseCount: number; searchValue: string }>()
);
