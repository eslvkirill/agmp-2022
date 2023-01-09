import { AuthorsInfo, CourseInfo } from 'src/app/features/courses/types';

interface CoursesState {
  courses: CourseInfo[];
  course: CourseInfo | null;
  authors: AuthorsInfo[];
}

const initialState: CoursesState = {
  courses: [],
  course: null,
  authors: [],
};

export { CoursesState, initialState };
