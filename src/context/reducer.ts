import { StateType, ActionType } from "@/types/Context";
import { User } from "@/types/User";

export const initialState: StateType = {
  users: [],
  usersRaw: [],
  searchUsers: [],
  admin: {
    username: "",
  },
  userDetail: undefined,
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload, usersRaw: action.payload };
    case "SET_ADMIN":
      return { ...state, admin: { ...state.admin, username: action.payload } };
    case "LOGOUT":
      return {
        ...state,
        users: [],
        admin: { ...state.admin, username: "" },
        userDetail: undefined,
      };
    case "SEARCH_USERS":
      if (action.payload === "") {
        return { ...state, users: state.usersRaw, searchUsers: [] };
      } else {
        const users: User[] = state.usersRaw.filter((user) => {
          const name = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`;
          return (
            name.includes(action.payload) ||
            user.username.toLowerCase().includes(action.payload) ||
            user.email.toLowerCase().includes(action.payload) ||
            user.id.toString().includes(action.payload)
          );
        });
        return {
          ...state,
          users: users.length ? users : state.usersRaw,
          searchUsers: users.length ? users : [],
        };
      }
    case "SET_USER_DETAIL":
      return { ...state, userDetail: action.payload };
    case "ORDER_ALPH":
      return {
        ...state,
        users:
          action.payload === "A-Z"
            ? [...state.users].sort((a, b) => {
                return a.firstName.localeCompare(b.firstName);
              })
            : action.payload === "Z-A"
            ? [...state.users].sort((a, b) => {
                return b.firstName.localeCompare(a.firstName);
              })
            : state.searchUsers.length
            ? state.searchUsers
            : state.usersRaw,
      };
    case "FILTER_BY_AGE":
      const users: User[] = state.usersRaw.filter(
        (user) => user.age >= action.payload
      );
      return {
        ...state,
        users: users.length ? users : state.usersRaw,
      };
    default:
      return state;
  }
};
