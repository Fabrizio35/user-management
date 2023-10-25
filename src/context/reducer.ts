import { StateType, ActionType } from "@/types/Context";

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
