import { User } from "@/types/User";
import Image from "next/image";
import Link from "next/link";

interface Props {
  user: User;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <tr
      className={`${
        user.id % 2 === 0
          ? "bg-foDark/70 hover:bg-foDark/50"
          : "bg-foDark/60 hover:bg-foDark/40"
      } text-white transition-colors duration-200 text-center`}
    >
      <td className="flex justify-center">
        <Image
          src={user.image}
          alt={`${user.firstName} ${user.lastName} image`}
          width={45}
          height={45}
        />
      </td>

      <td>
        {user.firstName} {user.lastName}
      </td>

      <td>{user.username}</td>

      <td>{user.email}</td>

      <td>
        <Link
          href={`/user/${user.id}`}
          className="bg-foLight text-foDark py-1 px-2 hover:bg-white"
        >
          +Info
        </Link>
      </td>
    </tr>
  );
};

export default User;
