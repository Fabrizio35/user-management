import UserList from "@/components/user-list";
import Header from "@/components/header";
import Searchbar from "@/components/search-users";

export default function Dashboard() {
  return (
    <main className="bg-foSemiLight flex flex-col items-center justify-center">
      <Header />
      <div className="container mx-auto">
        <div className="w-2/4">
          <Searchbar />
          <section className="overflow-y-scroll h-screen my-5">
            <UserList />
          </section>
        </div>
        <section></section>
      </div>
    </main>
  );
}
