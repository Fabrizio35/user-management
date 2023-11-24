"use client";
import { UserContext } from "@/context/user-context";
import { useContext } from "react";

const Searchbar: React.FC = () => {
  const { dispatch } = useContext(UserContext);

  const searchUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch({ type: "SET_USERS", payload: value.toLowerCase() });
  };

  return (
    <input
      onChange={searchUsers}
      placeholder="Search users..."
      className="bg-foLight w-full mt-10 p-2 border-2 border-foDark text-foDark"
    ></input>
  );
};

export default Searchbar;
