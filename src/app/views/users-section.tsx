"use client";
import Searchbar from "@/components/search-users";
import UserList from "@/components/user-list";
import { useContext } from "react";
import { UserContext } from "@/context/user-context";

const UsersSection: React.FC = () => {
  const { state } = useContext(UserContext);

  const userDetail = state.userDetail;

  return (
    <section
      className={`${
        userDetail ? "w-3/4" : "w-full"
      } flex flex-col max-h-full my-10 gap-5 overflow-y-hidden`}
    >
      <Searchbar />
      <div className="overflow-y-scroll">
        <UserList />
      </div>
    </section>
  );
};

export default UsersSection;
