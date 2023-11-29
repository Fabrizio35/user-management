"use client";
import User from "./user";
import { useEffect, useContext } from "react";
import { UserContext } from "@/context/user-context";
import { useRouter } from "next/navigation";

const UserList: React.FC = () => {
  const { state } = useContext(UserContext);
  const router = useRouter();

  const users = state.users;

  useEffect(() => {
    if (users.length < 1) router.push("/");
  }, [users]);

  return (
    <>
      {users.length ? (
        <table width="100%">
          <thead className="bg-foDark text-white">
            <tr>
              <th>ID</th>
              <th className="hidden sm:table-cell">Photo</th>
              <th>Name</th>
              <th className="hidden sm:table-cell">Username</th>
              <th className="hidden sm:table-cell">Email</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <User key={user.id} user={user} index={index} />
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
};

export default UserList;
