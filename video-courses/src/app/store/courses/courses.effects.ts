import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import { CoursesService } from '../../courses/services/courses.service';
import { COURSES_ACTIONS } from './courses.action';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}

  fetchMenus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(COURSES_ACTIONS.coursesInit.type),
      switchMap(() =>
        this.coursesService
          .getCourses()
          .pipe(
            map((courses) => COURSES_ACTIONS.fetchCoursesSuccess({ courses }))
          )
      )
    );
  });
}
