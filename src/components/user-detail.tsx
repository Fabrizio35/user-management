"use client";
import { useContext } from "react";
import { UserContext } from "@/context/user-context";
import {
  CloseCircle,
  AtIcon,
  UserIcon,
  GenderFemaleIcon,
  GenderMaleIcon,
  PhoneIcon,
  CakeIcon,
  DropIcon,
  HeightIcon,
  WidthIcon,
} from "@/icons/Icons";
import Image from "next/image";

const UserDetail: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const user = state.userDetail;

  const firstFields = [
    { id: 1, label: "Firstname", content: user?.firstName },
    { id: 2, label: "Lastname", content: user?.lastName },
    { id: 3, label: "Age", content: user?.age },
  ];

  const secondFields = [
    { id: 1, label: "Email", content: user?.email, icon: AtIcon },
    { id: 2, label: "Username", content: user?.username, icon: UserIcon },
    {
      id: 3,
      label: "Gender",
      content: user
        ? user.gender[0].toUpperCase() + user?.gender.slice(1)
        : null,
      icon: user?.gender === "male" ? GenderMaleIcon : GenderFemaleIcon,
    },
    { id: 4, label: "Phone", content: user?.phone, icon: PhoneIcon },
    {
      id: 5,
      label: "Birthdate",
      content: user?.birthDate.toString(),
      icon: CakeIcon,
    },
    { id: 6, label: "Blood Group", content: user?.bloodGroup, icon: DropIcon },
    { id: 7, label: "Height", content: `${user?.height} cm`, icon: HeightIcon },
    { id: 8, label: "Weight", content: `${user?.weight} kg`, icon: WidthIcon },
  ];

  const closeUserDetail = () => {
    dispatch({ type: "SET_USER_DETAIL", payload: undefined });
  };

  const deleteUserHandler = () => {
    dispatch({ type: "SET_MODAL_DELETE", payload: true });
  };

  return (
    <>
      {user ? (
        <section className="w-full xl:w-1/4 mb-5 xl:my-10 relative p-4 bg-foSemiDark/10 flex flex-col items-center">
          <div
            onClick={closeUserDetail}
            className="absolute text-foDark bg-foLight rounded-full top-[-9px] left-[-9px] cursor-pointer hover:text-foDark/80"
          >
            <CloseCircle className="w-6 h-6" />
          </div>
          <div className="flex gap-5 mb-5">
            <Image
              src={user.image}
              alt={`${user.firstName} ${user.lastName} image`}
              width={80}
              height={80}
              className="bg-gray-300 object-cover w-auto h-auto"
            />
            <div className="flex flex-col text-base text-foDark justify-between">
              {firstFields.map((field) => (
                <span key={field.id}>
                  <span className="underline font-semibold">{field.label}</span>
                  : {field.content}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 xl:flex xl:flex-col gap-6">
            {secondFields.map((field, index) => {
              const Icon = field.icon;
              return (
                <div
                  key={field.id}
                  className={`flex flex-col gap-1 items-center ${
                    index === 0 || index === secondFields.length - 1
                      ? "col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex gap-1 items-center">
                    <Icon className="w-5 h-5" />
                    <span className="text-base font-semibold">
                      {field.label}
                    </span>
                  </div>
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
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {field.content}
                  </span>
                </div>
              );
            })}
          </div>
          <button
            onClick={deleteUserHandler}
            className="bg-red-600 text-foLight hover:bg-red-500 mt-10 py-0.5 px-2"
          >
            Delete user
          </button>
        </section>
      ) : null}
    </>
  );
};

export default UserDetail;
