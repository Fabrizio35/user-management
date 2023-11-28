import Header from "@/components/header";
import UserDetail from "@/components/user-detail";
import UsersSection from "../views/users-section";

export default function Dashboard() {
  return (
    <div className="bg-foSemiLight flex flex-col max-h-screen">
      <Header />
      <main className="container mx-auto flex overflow-y-hidden gap-10">
        <UsersSection />
        <UserDetail />
      </main>
    </div>
  );
}
