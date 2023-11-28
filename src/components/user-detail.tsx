"use client";
import { useContext } from "react";
import { UserContext } from "@/context/user-context";
import { CloseCircle } from "@/Icons";
import Image from "next/image";

const UserDetail: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const user = state.userDetail;

  const closeUserDetail = () => {
    dispatch({ type: "SET_USER_DETAIL", payload: undefined });
  };

  return (
    <>
      {user ? (
        <section className="w-1/4 my-10 border-2 border-foDark/30 relative">
          <div
            onClick={closeUserDetail}
            className="absolute text-red-600 top-[-12px] left-[-12px] cursor-pointer hover:text-red-400"
          >
            <CloseCircle className="w-8 h-8" />
          </div>
          <Image
            src={user.image}
            alt={`${user.firstName} ${user.lastName} image`}
            width={120}
            height={120}
          />
        </section>
      ) : null}
    </>
  );
};

export default UserDetail;
