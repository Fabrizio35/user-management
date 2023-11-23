import UserList from "@/components/user-list";
import Header from "@/components/header";

export default function Dashboard() {
  return (
    <main className="bg-foSemiLight flex flex-col items-center justify-center">
      <Header />
      <section className="container mx-auto w-[1200px] overflow-y-scroll h-screen my-10">
        <UserList />
      </section>
    </main>
  );
}
