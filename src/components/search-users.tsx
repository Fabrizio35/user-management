"use client";
import { UserContext } from "@/context/user-context";
import { useContext, useState } from "react";
import { User } from "@/types/User";
import searchFilter from "@/utils/search-filter";

const Searchbar: React.FC = () => {
  const { dispatch, state } = useContext(UserContext);
  const [error, setError] = useState<boolean>(false);

  const usersRaw = state.usersRaw;

  const searchUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch({ type: "SEARCH_USERS", payload: value });
    const users: User[] = searchFilter(usersRaw, value);

    if (!users.length) setError(true);
    else setError(false);
  };

  return (
    <>
      {usersRaw.length ? (
        <div className="flex flex-col gap-2">
          <input
            onChange={searchUsers}
            placeholder="Search users by ID, name, username or email..."
            className="bg-foLight w-full p-2 border-2 border-foDark text-foDark"
          ></input>
          {error && <span className="text-red-600">User not found</span>}
        </div>
      ) : null}
    </>
  );
};

export default Searchbar;
