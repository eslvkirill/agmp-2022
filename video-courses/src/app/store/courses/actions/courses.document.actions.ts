import { createAction } from '@ngrx/store';

import { COURSES_TYPES } from '../courses.types';

export const coursesInit = createAction(COURSES_TYPES.COURSES_INIT);
