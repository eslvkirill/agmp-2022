import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CoursesService] });
    service = TestBed.inject(CoursesService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
