"use client";
import { UserIcon, UserCircleIcon } from "@/Icons";
import { useContext, useState } from "react";
import { UserContext } from "@/context/user-context";
import { LogoutIcon } from "@/Icons";

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { state, dispatch } = useContext(UserContext);

  const username = state.admin.username;

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <header className="w-full bg-foBlue/70 flex items-center justify-around py-2">
      <div className="font-medium gap-2 select-none flex text-foDark">
        <h1 className="hidden sm:flex sm:text-3xl">User Management</h1>
        <h1 className="flex sm:hidden text-5xl">UM</h1>
        <UserIcon className="h-8 w-8" strokeWidth={2.5} />
      </div>

      <div className="relative flex justify-center">
        <div
          onClick={() => setOpenModal(!openModal)}
          className="flex items-center gap-1 text-foDark cursor-pointer px-2 rounded-lg hover:bg-foBlue/80"
        >
          <span className="text-xl">{username}</span>
          <UserCircleIcon />
        </div>

        {openModal ? (
          <div
            onClick={logout}
            className="text-foDark absolute w-32 bg-foLight hover:bg-white cursor-pointer text-center bottom-[-40px] border-2 border-foDark flex items-center justify-center gap-2 py-1"
          >
            <span className="text-xl">Log out</span>
            <LogoutIcon />
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
