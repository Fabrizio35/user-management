import Header from "@/components/header";
import UserDetail from "@/components/user-detail";
import UsersSection from "@/views/users-section";

export default function Dashboard() {
  return (
    <div className="bg-foLight flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex flex-col lg:flex-row lg:gap-10 px-10 sm:px-0 overflow-y-hidden min-h-screen lg:max-h-screen">
        <UsersSection />
        <UserDetail />
      </main>
    </div>
  );
}
