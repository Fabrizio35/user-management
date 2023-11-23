import Login from "@/components/login";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <section className="bg-foLight min-h-screen lg:h-screen flex flex-col lg:flex-row gap-10 lg:gap-0 items-center p-5">
      <Intro />
      <Login />
    </section>
  );
}
