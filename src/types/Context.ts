import { User } from "./User";

export type StateType = {
  users: User[];
};

export type ActionType<T = any> = {
  type: string;
  payload?: T;
};
