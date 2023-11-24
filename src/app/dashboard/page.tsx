import UserList from "@/components/user-list";
import Header from "@/components/header";
import Searchbar from "@/components/search-users";

export default function Dashboard() {
  return (
    <div className="bg-foSemiLight flex flex-col items-center justify-center">
      <Header />
      <main className="container mx-auto">
        <section className="w-2/4">
          <Searchbar />
          <div className="overflow-y-scroll my-5 max-h-screen">
            <UserList />
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}
