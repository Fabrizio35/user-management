import UserList from "@/components/user-list";

export default function Dashboard() {
  return (
    <div className="bg-foSemiLight h-screen">
      <main className="container mx-auto w-[1200px] flex flex-col items-center justify-center h-full">
        <UserList />
      </main>
    </div>
  );
}
