import { StateType, ActionType } from "@/types/Context";
import { User } from "@/types/User";

export const initialState: StateType = {
  users: [],
  usersRaw: [],
  admin: {
    username: "",
  },
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload, usersRaw: action.payload };
    case "SET_ADMIN":
      return { ...state, admin: { ...state.admin, username: action.payload } };
    case "LOGOUT":
      return { ...state, users: [], admin: { ...state.admin, username: "" } };
    case "SET_USERS":
      if (action.payload === "") {
        return { ...state, users: state.usersRaw };
      } else {
        const users: User[] = state.usersRaw.filter((user) => {
          const name = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}}`;
          return (
            name.includes(action.payload) ||
            user.username.toLowerCase().includes(action.payload) ||
            user.email.toLowerCase().includes(action.payload)
          );
        });
        if (users.length) return { ...state, users };
        else return { ...state, users: state.usersRaw };
      }
    default:
      return state;
  }
};
