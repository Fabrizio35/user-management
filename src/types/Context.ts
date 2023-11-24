import { User } from "./User";

interface Admin {
  username: string;
}

export type StateType = {
  users: User[];
  usersRaw: User[];
  admin: Admin;
};

export type ActionType<T = any> = {
  type: string;
  payload?: T;
};