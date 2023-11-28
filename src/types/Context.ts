import { User } from "./User";

interface Admin {
  username: string;
}

export type StateType = {
  users: User[];
  usersRaw: User[];
  admin: Admin;
  userDetail: User | undefined;
};

export type ActionType<T = any> = {
  type: string;
  payload?: T;
};
