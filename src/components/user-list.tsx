"use client";
import User from "./User";
import { useEffect, useContext } from "react";
import { UserContext } from "@/context/user-context";
import { useRouter } from "next/navigation";

const UserList: React.FC = () => {
  const { state } = useContext(UserContext);
  const router = useRouter();

  const users = state.users;

  useEffect(() => {
    if (users.length < 1) router.push("/");
  }, [users, router]);

  return (
    <section className="w-full overflow-y-scroll mb-10">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default UserList;
