import { UserInfo } from 'src/app/shell/header/types';

interface UserState {
  userInfo: UserInfo | null;
  userName: string;
  token: string | null;
  isAuthenticated: boolean;
  errorMessage: string;
}

const initialState: UserState = {
  userInfo: null,
  userName: '',
  token: null,
  isAuthenticated: false,
  errorMessage: '',
};

export { UserState, initialState };
