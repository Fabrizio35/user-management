import { StateType, ActionType } from "@/types/Context";

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
      } else
        return {
          ...state,
          users: state.users.filter((user) =>
            user.firstName.toLowerCase().includes(action.payload)
          ),
        };
    default:
      return state;
  }
};
