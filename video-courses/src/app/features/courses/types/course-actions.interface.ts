import { ButtonType } from 'src/app/shared/enums';
import { CourseInfo } from './course.interface';

export interface CourseAction {
  text: string;
  type: ButtonType;
  action: (course: CourseInfo) => void;
}
