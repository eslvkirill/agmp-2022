import { ButtonType } from '../../shared/enums';
import { CourseInfo } from './course.interface';

export interface CourseAction {
  text: string;
  type: ButtonType;
  action: (course: CourseInfo) => void;
}
