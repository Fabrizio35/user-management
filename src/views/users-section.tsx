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
      className={`${
        userDetail ? "lg:w-3/4" : "w-full"
      } flex flex-col mt-10 lg:my-10 gap-5 max-h-screen`}
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