import { StateType, ActionType } from "@/types/Context";
import { User } from "@/types/User";
import searchFilter from "@/utils/search-filter";

export const initialState: StateType = {
  users: [],
  usersRaw: [],
  searchUsers: [],
  admin: {
    username: "",
  },
  userDetail: undefined,
  modalDelete: false,
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
        const users: User[] = searchFilter(state.usersRaw, action.payload);
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
      const usersByAge: User[] = state.usersRaw.filter(
        (user) => user.age >= action.payload
      );
      return {
        ...state,
        users: usersByAge.length ? usersByAge : state.usersRaw,
      };
    case "FILTER_BY_GENDER":
      const usersByGender: User[] = state.usersRaw.filter(
        (user) => user.gender === action.payload
      );
      return {
        ...state,
        users: usersByGender.length ? usersByGender : state.usersRaw,
      };
    case "SET_MODAL_DELETE":
      return { ...state, modalDelete: action.payload };
    case "DELETE_USER":
      const usersFilter: User[] = state.users.filter(
        (user) => user.id !== action.payload
      );
      const usersRawFilter: User[] = state.usersRaw.filter(
        (user) => user.id !== action.payload
      );
      const usersSearchFilter: User[] = state.searchUsers.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: usersFilter,
        usersRaw: usersRawFilter,
        searchUsers: usersSearchFilter,
      };
    default:
      return state;
  }
};
