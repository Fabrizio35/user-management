import UserList from "@/components/user-list";

export default function Dashboard() {
  return (
    <main className="bg-foSemiLight flex items-center justify-center">
      <section className="container mx-auto w-[1200px] overflow-y-scroll h-screen">
        <UserList />
      </section>
    </main>
  );
}
