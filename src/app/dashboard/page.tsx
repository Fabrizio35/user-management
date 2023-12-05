import Header from "@/components/header";
import UserDetail from "@/components/user-detail";
import UsersSection from "@/views/users-section";
import ModalDelete from "@/components/modal-delete";

export default function Dashboard() {
  return (
    <div className="bg-foLight flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex flex-col xl:flex-row xl:gap-10 px-6 sm:px-0 xl:max-h-screen">
        <UsersSection />
        <UserDetail />
      </main>
      <ModalDelete />
    </div>
  );
}
