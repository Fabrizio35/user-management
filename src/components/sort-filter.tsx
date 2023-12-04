"use client";
import { useContext, useState } from "react";
import { UserContext } from "@/context/user-context";

const SortFilter: React.FC = () => {
  const [stateSF, setState] = useState({
    orderAlph: "orderAlph",
    filterAge: 1,
    filterGender: "filterGender",
  });

  const { dispatch, state } = useContext(UserContext);

  const users = state.users;

  const changeHandler = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const value = e.target.value;
    const property = e.target.name;
    const type = e.target.type;

    setState({
      ...stateSF,
      [property]: type === "range" ? parseInt(value) : value,
    });

    property === "orderAlph"
      ? dispatch({ type: "ORDER_ALPH", payload: value })
      : property === "filterAge"
      ? dispatch({ type: "FILTER_BY_AGE", payload: value })
      : dispatch({ type: "FILTER_BY_GENDER", payload: value });
  };

  return (
    <>
      {users.length ? (
        <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-7 sm:gap-0">
          <select
            name="orderAlph"
            id="orderAlph"
            value={stateSF.orderAlph}
            onChange={changeHandler}
            className="border border-foDark"
          >
            <option value="orderAlph">Order Alphabetically</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>

          <div className="flex flex-col items-center">
            <label htmlFor="range-age">Age from:</label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                name="filterAge"
                id="range-age"
                min={1}
                max={50}
                onChange={changeHandler}
                value={stateSF.filterAge}
              />
              <span>{stateSF.filterAge} years old</span>
            </div>
          </div>

          <select
            name="filterGender"
            id="filterGender"
            value={stateSF.filterGender}
            onChange={changeHandler}
            className="border border-foDark"
          >
            <option value="filterGender">Filter Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      ) : null}
    </>
  );
};

export default SortFilter;
