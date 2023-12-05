"use client";
import Searchbar from "@/components/search-users";
import UserList from "@/components/user-list";
import SortFilter from "@/components/sort-filter";
import { useContext } from "react";
import { UserContext } from "@/context/user-context";

const UsersSection: React.FC = () => {
  const { state } = useContext(UserContext);

  const userDetail = state.userDetail;

  return (
    <section
      className={`flex flex-col gap-5 usersSection ${
        userDetail ? "w-full xl:w-3/4" : "w-full"
      }`}
    >
      <SortFilter />
      <Searchbar />
      <div className="overflow-y-scroll">
        <UserList />
      </div>
    </section>
  );
};

export default UsersSection;
