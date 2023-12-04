"use client";
import { useContext, useState } from "react";
import { UserContext } from "@/context/user-context";

const SortFilter: React.FC = () => {
  const [stateSF, setState] = useState({
    orderAlph: "orderAlph",
    filterAge: 1,
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
      : dispatch({ type: "FILTER_BY_AGE", payload: value });
  };

  return (
    <>
      {users.length ? (
        <div className="w-full flex items-center justify-around">
          <select
            onChange={changeHandler}
            name="orderAlph"
            id="orderAlph"
            value={stateSF.orderAlph}
          >
            <option value="orderAlph">Order Alph</option>
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
        </div>
      ) : null}
    </>
  );
};

export default SortFilter;
