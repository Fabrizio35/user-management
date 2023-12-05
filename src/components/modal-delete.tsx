"use client";
import { UserContext } from "@/context/user-context";
import { useContext } from "react";
import {
  UserIcon,
  IdIcon,
  AtIcon,
  UserCircleIcon,
  CloseCircle,
} from "@/icons/Icons";

const ModalDelete: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const user = state.userDetail;
  const openModal = state.modalDelete;

  const fields = [
    { id: 1, label: "ID", content: user?.id, icon: IdIcon },
    {
      id: 2,
      label: "Name",
      content: `${user?.firstName} ${user?.lastName}`,
      icon: UserIcon,
    },
    { id: 3, label: "Username", content: user?.username, icon: UserCircleIcon },
    { id: 4, label: "Email", content: user?.email, icon: AtIcon },
  ];

  const closeModalHandler = () => {
    dispatch({ type: "SET_MODAL_DELETE", payload: false });
  };

  const deleteUserHandler = () => {
    dispatch({ type: "DELETE_USER", payload: user?.id });
    dispatch({ type: "SET_MODAL_DELETE", payload: false });
    dispatch({ type: "SET_USER_DETAIL", payload: undefined });
  };

  return (
    <>
      {openModal ? (
        <div
          className="w-screen h-screen bg-black/70 fixed top-0 left-0 z-50 flex items-center justify-center"
          onClick={closeModalHandler}
        >
          <div className="bg-foLight relative p-5 rounded-2xl gap-7 flex flex-col text-foDark">
            <div
              onClick={closeModalHandler}
              className="absolute top-1 right-1 cursor-pointer text-foDark hover:text-foDark/80"
            >
              <CloseCircle />
            </div>
            <h3 className="text-xl mt-3">
              Are you sure you want to{" "}
              <span className="font-semibold">permanently</span> delete the
              following user?
            </h3>
            <div className="flex flex-col gap-4">
              {fields.map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.id} className="flex items-center gap-1">
                    <Icon className="h-5 w-5" />
                    <span>
                      <span className="font-medium underline">
                        {field.label}
                      </span>
                      : {field.label === "ID" ? "#" : null}
                      {field.content}
                    </span>
                  </div>
                );
              })}
            </div>
            <button
              onClick={deleteUserHandler}
              className="bg-red-600 hover:bg-red-500 text-foLight"
            >
              Permanently delete
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalDelete;
