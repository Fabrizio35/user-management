"use client";
import { useContext } from "react";
import { UserContext } from "@/context/user-context";
import { CloseCircle } from "@/Icons";
import Image from "next/image";

const UserDetail: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const user = state.userDetail;

  const fields = [
    { id: 1, label: "Username", content: user?.username },
    {
      id: 2,
      label: "Gender",
      content: user
        ? user.gender[0].toUpperCase() + user?.gender.slice(1)
        : null,
    },
    { id: 3, label: "Phone", content: user?.phone },
    { id: 4, label: "Birthdate", content: user?.birthDate.toString() },
    { id: 5, label: "Blood Group", content: user?.bloodGroup },
    { id: 6, label: "Height", content: user?.height },
    { id: 7, label: "Weight", content: user?.weight },
  ];

  const closeUserDetail = () => {
    dispatch({ type: "SET_USER_DETAIL", payload: undefined });
  };

  return (
    <>
      {user ? (
        <section className="w-1/4 my-10 relative p-2 flex flex-col justify-center">
          <div
            onClick={closeUserDetail}
            className="absolute text-red-600 bg-foLight rounded-full top-[-20px] left-[-20px] cursor-pointer hover:text-red-400"
          >
            <CloseCircle className="w-8 h-8" />
          </div>
          <div className="flex gap-5 mb-5">
            <Image
              src={user.image}
              alt={`${user.firstName} ${user.lastName} image`}
              width={100}
              height={100}
              className="bg-gray-300"
            />
            <div className="flex flex-col text-lg text-foDark justify-between">
              <span>
                <span className="underline font-semibold">Firstname</span>:{" "}
                {user.firstName}
              </span>
              <span>
                <span className="underline font-semibold">Lastname</span>:{" "}
                {user.lastName}
              </span>
              <span>
                <span className="underline font-semibold">Age</span>: {user.age}{" "}
                years old
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mb-10">
            <span className="text-lg underline font-semibold">Email</span>
            <span>{user.email}</span>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className={`flex flex-col justify-center items-center ${
                  index === fields.length - 1 ? "col-span-2" : null
                }`}
              >
                <span className="text-lg underline font-semibold">
                  {field.label}
                </span>
                <span
                  className={`${
                    field.label === "Gender" && field.content === "Female"
                      ? "text-pink-500 font-bold"
                      : field.label === "Gender" && field.content === "Male"
                      ? "text-blue-800 font-bold"
                      : field.label === "Blood Group"
                      ? "text-red-600 font-bold"
                      : null
                  }`}
                >
                  {field.content}
                </span>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default UserDetail;
