"use client";
import React, { Dispatch, createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { StateType, ActionType } from "@/types/Context";
import { initialState } from "./reducer";

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
