import { StateType, ActionType } from "@/types/Context";

export const initialState: StateType = {
  users: [],
  admin: {
    username: "",
  },
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "SET_ADMIN":
      return { ...state, admin: action.payload };
    default:
      return state;
  }
};
