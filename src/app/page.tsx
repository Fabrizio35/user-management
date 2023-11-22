import Login from "@/components/Login";
import { UserIcon } from "@/Icons";

function Title(): JSX.Element {
  return (
    <div className="absolute top-5 flex text-foDark font-medium gap-2 select-none">
      <h1 className="sm:flex mb-10 text-3xl sm:text-5xl">User Management</h1>
      {/* <h1 className="sm:hidden mb-10 text-5xl">UM</h1> */}
      <UserIcon className="h-12 w-12" strokeWidth={2.5} />
    </div>
  );
}

export default function Home() {
  return (
    <section className="bg-foSemiLight min-h-screen flex items-center justify-center relative">
      <Title />
      <Login />
    </section>
  );
}
