import Login from "@/components/Login";
import { UserIcon } from "@/Icons";

export default function Home() {
  return (
    <main className="bg-foSemiLight min-h-screen flex items-center justify-center relative">
      <div className="absolute top-5 flex text-foDark font-medium gap-2 select-none">
        <h1 className="mb-10 text-5xl">User Management</h1>
        <UserIcon size="42" strokeWidth="3" />
      </div>
      <Login />
    </main>
  );
}
