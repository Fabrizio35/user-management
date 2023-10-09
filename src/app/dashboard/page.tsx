"use client";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/userContext";

export default function Dashboard() {
  const { state, dispatch } = useContext(UserContext);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      const users = data.users;
      dispatch({ type: "GET_USERS", payload: users });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(state.users);

  return <main className="bg-foSemiLight min-h-screen"></main>;
}
