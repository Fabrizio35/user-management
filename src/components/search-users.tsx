"use client";
import { UserContext } from "@/context/user-context";
import { useContext, useState } from "react";
import { User } from "@/types/User";

const Searchbar: React.FC = () => {
  const { dispatch, state } = useContext(UserContext);
  const [error, setError] = useState<boolean>(false);

  const usersRaw = state.usersRaw;

  const searchUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch({ type: "SET_USERS", payload: value.toLowerCase() });
    const users: User[] = usersRaw.filter(
      (user) =>
        user.firstName.toLowerCase().includes(value.toLowerCase()) ||
        user.lastName.toLowerCase().includes(value.toLowerCase()) ||
        user.username.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase())
    );
    if (!users.length) setError(true);
    else setError(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        onChange={searchUsers}
        placeholder="Search users by name, username or email..."
        className="bg-foLight w-full mt-10 p-2 border-2 border-foDark text-foDark"
      ></input>
      {error ? <span className="text-red-600">User not found</span> : null}
    </div>
  );
};

export default Searchbar;
