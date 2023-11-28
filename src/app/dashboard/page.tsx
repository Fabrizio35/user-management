import UserList from "@/components/user-list";
import Header from "@/components/header";
import Searchbar from "@/components/search-users";

export default function Dashboard() {
  return (
    <div className="bg-foSemiLight flex flex-col max-h-screen">
      <Header />
      <main className="container mx-auto flex overflow-y-hidden">
        <section className="w-3/4 flex flex-col max-h-full">
          <Searchbar />
          <div className="overflow-y-scroll my-5">
            <UserList />
          </div>
        </section>
      </main>
    </div>
  );
}
