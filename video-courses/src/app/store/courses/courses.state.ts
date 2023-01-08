import { CourseInfo } from 'src/app/courses/types';

interface CoursesState {
  courses: CourseInfo[];
}

const initialState: CoursesState = {
  courses: [],
};

export { CoursesState, initialState };
