import { uuid } from 'src/app/shared/utils/uuid.utils';
import { CourseInfo } from '../types/index';

export const COURSES: CourseInfo[] = [
  {
    id: uuid(),
    title: 'Video Course 1. Components',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat pellentesque. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Platea dictumst quisque sagittis purus sit. Quam id leo in vitae turpis massa sed. Semper risus in hendrerit gravida rutrum quisque. Id volutpat lacus laoreet non curabitur gravida arcu. Turpis tincidunt id aliquet risus feugiat in. Quis enim lobortis scelerisque fermentum. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Commodo sed egestas egestas fringilla. Molestie nunc non blandit massa.',
    creationDate: new Date(),
    duration: 195,
    topRated: true,
  },
  {
    id: uuid(),
    title: 'Video Course 2. Pipes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat pellentesque. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Platea dictumst quisque sagittis purus sit. Quam id leo in vitae turpis massa sed. Semper risus in hendrerit gravida rutrum quisque. Id volutpat lacus laoreet non curabitur gravida arcu. Turpis tincidunt id aliquet risus feugiat in. Quis enim lobortis scelerisque fermentum. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Commodo sed egestas egestas fringilla. Molestie nunc non blandit massa.',
    creationDate: new Date(2020, 8),
    duration: 45,
  },
  {
    id: uuid(),
    title: 'Video Course 3. RxJS & Observables',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat pellentesque. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Platea dictumst quisque sagittis purus sit. Quam id leo in vitae turpis massa sed. Semper risus in hendrerit gravida rutrum quisque. Id volutpat lacus laoreet non curabitur gravida arcu. Turpis tincidunt id aliquet risus feugiat in. Quis enim lobortis scelerisque fermentum. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Commodo sed egestas egestas fringilla. Molestie nunc non blandit massa.',
    creationDate: new Date(2025, 2),
    duration: 120,
  },
];
