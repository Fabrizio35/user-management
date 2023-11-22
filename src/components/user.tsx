import { User } from "@/types/User";
import Image from "next/image";

interface Props {
  user: User;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <tr
      className={`${
        user.id % 2 === 0
          ? "bg-slate-400 hover:bg-slate-400/60"
          : "bg-slate-500 hover:bg-slate-500/60"
      } text-white transition-colors duration-150 cursor-pointer text-center`}
    >
      <td className="flex justify-center">
        <Image
          src={user.image}
          alt={`${user.firstName} ${user.lastName} image`}
          width={40}
          height={40}
        />
      </td>

      <td>
        {user.firstName} {user.lastName}
      </td>

      <td>{user.username}</td>

      <td>{user.email}</td>
    </tr>
  );
};

export default User;
