import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL, ENDPOINT, PAGINATION } from 'src/app/shared/constants';

import { AuthorsInfo, CourseInfo } from '../types/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly apiPrefix = `${BACKEND_URL}/`;
  private readonly coursesApiPrefix = `${this.apiPrefix}${ENDPOINT.COURSES}`;
  private readonly authorsApiPrefix = `${this.apiPrefix}${ENDPOINT.AUTHORS}`;

  constructor(private http: HttpClient) {}

  getCourses(
    count: number = PAGINATION.SIZE,
    start: number = PAGINATION.START_NUMBER
  ): Observable<CourseInfo[]> {
    const params = new HttpParams().set('count', count).set('start', start);
    return this.http.get<CourseInfo[]>(this.coursesApiPrefix, { params });
  }

  createCourse(course: CourseInfo): Observable<CourseInfo> {
    return this.http.post<CourseInfo>(this.coursesApiPrefix, course);
  }

  getCourseById(id: number): Observable<CourseInfo[]> {
    const params = new HttpParams().set('id', id);
    return this.http.get<CourseInfo[]>(this.coursesApiPrefix, { params });
  }

  updateCourse(course: CourseInfo): Observable<CourseInfo> {
    return this.http.patch<CourseInfo>(
      `${this.coursesApiPrefix}/${course.id}`,
      course
    );
  }

  removeCourse(id: number): Observable<CourseInfo> {
    return this.http.delete<CourseInfo>(`${this.coursesApiPrefix}/${id}`);
  }

  getAuthors(): Observable<AuthorsInfo[]> {
    return this.http.get<AuthorsInfo[]>(this.authorsApiPrefix);
  }
}
