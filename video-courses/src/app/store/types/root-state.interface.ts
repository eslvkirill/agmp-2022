import { CoursesState } from '../courses';
import { UserState } from '../user';

export interface State {
  courses: CoursesState;
  user: UserState;
}
