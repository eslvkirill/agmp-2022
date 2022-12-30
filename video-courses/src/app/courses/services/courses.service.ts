import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL, ENDPOINT } from 'src/app/shared/constants';

import { CourseInfo } from '../types/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly coursesApiPrefix = `${BACKEND_URL}/${ENDPOINT.COURSES}`;

  constructor(private http: HttpClient) {}

  getCourses(): Observable<CourseInfo[]> {
    return this.http.get<CourseInfo[]>(this.coursesApiPrefix);
  }

  createCourse(): void {}

  getCourseById(id: number): Observable<CourseInfo[]> {
    const params = new HttpParams().set('id', id);
    return this.http.get<CourseInfo[]>(`${this.coursesApiPrefix}`, { params });
  }

  updateItem() {}

  removeCourse(id: number): Observable<CourseInfo> {
    const params = new HttpParams().set('id', id);
    return this.http.delete<CourseInfo>(`${this.coursesApiPrefix}`, { params });
  }
}
