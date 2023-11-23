import { UserIcon } from "@/Icons";

export default function Intro(): JSX.Element {
  return (
    <header className="flex text-foDark w-full lg:w-3/5 flex-col px-5 gap-10">
      <div className="font-medium gap-2 select-none flex">
        <h1 className="hidden sm:flex sm:text-5xl">User Management</h1>
        <h1 className="flex sm:hidden text-5xl">UM</h1>
        <UserIcon className="h-12 w-12 text-foBlue" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-lg text-blue-800">English</span>
        <p className="text-xl">
          Test project in which you must enter a username and password (they can
          be anything) and simulate a management system, in this case of users,
          but it could be of any model, for example, products.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-lg text-red-500">Español</span>
        <p className="text-xl">
          Proyecto de prueba en el que debes ingresar nombre de usuario y
          contraseña (pueden ser cualquiera) y simular un sistema de gestión, en
          este caso de usuarios, pero podría ser de cualquier modelo, por
          ejemplo, de productos.
        </p>
      </div>
    </header>
  );
}
