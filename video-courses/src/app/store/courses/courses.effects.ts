import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { CoursesService } from 'src/app/features/courses/services/courses.service';
import { CourseInfo } from 'src/app/features/courses/types';

import { COURSES_ACTIONS } from '.';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions<{ type: string; id: number; course: CourseInfo }>,
    private coursesService: CoursesService
  ) {}

  fetchCourses$ = createEffect(() => {
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

  getCourseById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(COURSES_ACTIONS.getCoursebyId.type),
      switchMap((action) =>
        this.coursesService.getCourseById(action.id).pipe(
          map((courses) => {
            const [course] = courses;
            return COURSES_ACTIONS.getCourseByIdSuccess({ course });
          })
        )
      )
    );
  });

  fetchCourseAuthors$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(COURSES_ACTIONS.initCourseAuthors.type),
      switchMap(() =>
        this.coursesService
          .getAuthors()
          .pipe(
            map((authors) =>
              COURSES_ACTIONS.fetchCourseAuthorsSuccess({ authors })
            )
          )
      )
    );
  });

  addNewCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(COURSES_ACTIONS.createNewCourse.type),
      switchMap((action) =>
        this.coursesService
          .createCourse(action.course)
          .pipe(
            map((course) => COURSES_ACTIONS.createNewCourseSuccess({ course }))
          )
      )
    );
  });

  editCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(COURSES_ACTIONS.editCourse.type),
      switchMap((action) =>
        this.coursesService
          .updateCourse(action.course)
          .pipe(map((course) => COURSES_ACTIONS.editCourseSuccess({ course })))
      )
    );
  });

  deleteCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(COURSES_ACTIONS.deleteCourse.type),
      switchMap((action) =>
        this.coursesService.removeCourse(action.id).pipe(
          tap(() => COURSES_ACTIONS.deleteCourseSuccess()),
          switchMap(async () => COURSES_ACTIONS.coursesInit())
        )
      )
    );
  });
}
