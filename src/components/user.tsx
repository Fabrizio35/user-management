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
          ? "bg-foDark/70 hover:bg-foDark/50"
          : "bg-foDark/60 hover:bg-foDark/40"
      } text-white transition-colors duration-200 cursor-pointer text-center`}
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
