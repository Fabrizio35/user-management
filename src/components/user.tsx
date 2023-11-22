import { User } from "@/types/User";
import Image from "next/image";

interface Props {
  user: User;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <section
      className={`${
        user.id % 2 === 0
          ? "bg-slate-400 hover:bg-slate-400/60"
          : "bg-slate-500 hover:bg-slate-500/60"
      } flex justify-between items-center text-white transition-colors duration-150 cursor-pointer`}
    >
      <div className="flex flex-1 gap-3">
        <Image
          src={user.image}
          alt={`${user.firstName} ${user.lastName} image`}
          width={50}
          height={50}
        />
        <div className="flex items-center gap-16">
          <span className="text-sm">{user.id}.</span>
          <h3 className="font-semibold">
            {user.firstName} {user.lastName}
          </h3>
        </div>
      </div>

      <span className="flex flex-1 justify-center text-gray-100">
        {user.username}
      </span>

      <span className="flex flex-1 justify-center text-gray-100">
        {user.email}
      </span>
    </section>
  );
};

export default User;
