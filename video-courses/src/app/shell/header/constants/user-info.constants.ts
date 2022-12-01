import { uuid } from 'src/app/shared/utils/uuid.utils';

import { UserData } from '../types';

export const USER_INFO: UserData = {
  id: uuid(),
  firstName: 'Bradley',
  lastName: 'Cooper',
};
