import { User } from "@/types/User";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "@/context/user-context";

interface Props {
  user: User;
  index: number;
}

const User: React.FC<Props> = ({ user, index }) => {
  const { dispatch } = useContext(UserContext);

  const setUserHandler = () => {
    dispatch({ type: "SET_USER_DETAIL", payload: user });
  };

  return (
    <tr
      className={`${
        index % 2 === 0
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
        <button
          onClick={setUserHandler}
          className="bg-foLight text-foDark py-0.5 px-2 hover:bg-white cursor-pointer"
        >
          +Info
        </button>
      </td>
    </tr>
  );
};

export default User;
