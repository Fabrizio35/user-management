"use client";
import React, { Dispatch, createContext, useReducer } from "react";
import { User } from "@/types/User";

type StateType = {
  users: User[];
};

type ActionType<T = any> = {
  type: string;
  payload?: T;
};

const initialState: StateType = {
  users: [],
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export const UserContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
