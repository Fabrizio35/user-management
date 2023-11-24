"use client";
import { UserIcon, UserCircleIcon } from "@/Icons";
import { useContext } from "react";
import { UserContext } from "@/context/user-context";

const Header: React.FC = () => {
  const { state } = useContext(UserContext);

  const username = state.admin.username;

  return (
    <header className="w-full bg-foBlue flex items-center justify-around py-2">
      <div className="font-medium gap-2 select-none flex text-foDark">
        <h1 className="hidden sm:flex sm:text-3xl">User Management</h1>
        <h1 className="flex sm:hidden text-5xl">UM</h1>
        <UserIcon className="h-8 w-8" strokeWidth={2.5} />
      </div>

      <div className="flex items-center gap-1 text-foDark">
        <span className="text-xl">{username}</span>
        <UserCircleIcon />
      </div>
    </header>
  );
};

export default Header;
