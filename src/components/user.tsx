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
          width={40}
          height={40}
        />
      </td>

      <td className="text-xs md:text-sm lg:text-base">
        {user.firstName} {user.lastName}
      </td>

      <td className="hidden sm:table-cell text-xs md:text-sm lg:text-base">
        {user.username}
      </td>

      <td className="hidden sm:table-cell text-xs md:text-sm lg:text-base">
        {user.email}
      </td>

      <td>
        <button
          onClick={setUserHandler}
          className="bg-foLight text-foDark text-sm md:text-base py-0 md:py-0.5 px-1 md:px-2 hover:bg-white cursor-pointer"
        >
          +Info
        </button>
      </td>
    </tr>
  );
};

export default User;
