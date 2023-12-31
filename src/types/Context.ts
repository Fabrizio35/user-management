import { User } from "./User";

interface Admin {
  username: string;
}

export type StateType = {
  users: User[];
  usersRaw: User[];
  searchUsers: User[];
  admin: Admin;
  userDetail: User | undefined;
  modalDelete: boolean;
};

export type ActionType<T = any> = {
  type: string;
  payload?: T;
};
