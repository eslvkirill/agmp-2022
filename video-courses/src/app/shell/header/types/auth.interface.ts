interface LoginInfo {
  login: string;
  password: string;
}

interface UserInfo extends LoginInfo {
  id: number;
  token: string;
  name: {
    first: string;
    last: string;
  };
}

type AuthToken = { token: string };

export { LoginInfo, UserInfo, AuthToken };
