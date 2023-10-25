"use client";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import UserList from "@/components/UserList";

export default function Dashboard() {
  const { state } = useContext(UserContext);
  const router = useRouter();

  const users = state.users;

  useEffect(() => {
    if (users.length < 1) router.push("/");
  }, [users, router]);

  return (
    <main className="bg-foSemiLight min-h-screen">
      <UserList users={users} />
    </main>
  );
}
