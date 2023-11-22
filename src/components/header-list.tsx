"use client";
import { UserContext } from "@/context/user-context";
import { useContext } from "react";

export default function HeaderList(): JSX.Element {
  const { state } = useContext(UserContext);

  const users = state.users;

  return (
    <>
      {users.length ? (
        <header className="w-full flex justify-between bg-foDark text-white font-bold mt-10">
          <span className="flex flex-1 justify-center">Name</span>
          <span className="flex flex-1 justify-center">Username</span>
          <span className="flex flex-1 justify-center">Email</span>
        </header>
      ) : null}
    </>
  );
}
