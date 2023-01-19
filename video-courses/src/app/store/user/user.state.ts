import { UserInfo } from 'src/app/shell/header/types';

interface UserState {
  userInfo: UserInfo | null;
  userName: string;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  userInfo: null,
  userName: '',
  token: null,
  isAuthenticated: false,
};

export { UserState, initialState };
