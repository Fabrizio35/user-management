"use client";
import { useState, useEffect, useContext } from "react";
import { EyeIcon, EyeOffIcon } from "@/Icons";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user-context";

interface InitialState {
  username: string;
  password: string;
}

const initialState: InitialState = {
  username: "",
  password: "",
};

const validate = (form: InitialState): InitialState => {
  const errors: InitialState = {
    username: "",
    password: "",
  };

  if (!form.username) {
    errors.username = "Enter username";
  } else if (form.username.length < 3) {
    errors.username = "Username must be more than 3 characters";
  }

  const regex = /^(?=.*[a-zA-ZÑñ])(?=.*[A-ZÑÑ])(?=.*[a-zñ])(?=.*\d).{8,}$/;

  if (!form.password) {
    errors.password = "Enter password";
  } else if (!regex.test(form.password)) {
    errors.password =
      "The password must contain at least 8 characters, including an uppercase letter, a lowercase letter, and a number";
  }

  return errors;
};

const Login: React.FC = () => {
  const [form, setForm] = useState<InitialState>(initialState);
  const [errors, setErrors] = useState<InitialState>(initialState);
  const [focus, setFocus] = useState<InitialState>(initialState);
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [firstSelection, setFirstSelection] =
    useState<InitialState>(initialState);

  const router = useRouter();

  const { dispatch } = useContext(UserContext);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const type = e.type;
    const name = e.target.name;

    setFirstSelection({ ...firstSelection, [name]: true });

    setFocus({ ...focus, [name]: type === "focus" ? true : false });
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users?limit=0");
      const data = await response.json();
      const users = data.users;
      dispatch({ type: "GET_USERS", payload: users });
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "SET_ADMIN", payload: form.username });
    await fetchData();
    router.push("/dashboard");
  };

  useEffect(() => {
    setErrors(validate(form));
  }, [form]);

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-5 bg-foLight w-11/12 px-10 py-20 sm:w-auto sm:px-20 sm:py-36 rounded-xl border-2 border-foSemiDark relative shadow-lg shadow-foDark/90"
    >
      <span className="mx-5 sm:mx-0 absolute top-3 left-0 right-0 text-center text-gray-500 text-sm">
        *You can enter any username and password, it&apos;s all test
      </span>
      <div className="relative flex flex-col">
        <h2 className="text-4xl text-foDark font-medium underline select-none">
          Login
        </h2>
      </div>

      <div
        className={`flex flex-col gap-1 relative transition-all duration-300 ${
          errors.username && firstSelection.username ? "mb-10" : null
        }`}
      >
        <label htmlFor="username" className="text-foDark text-xl">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={focusHandler}
          className={`w-full bg-foSemiDark text-foLight py-0.5 px-2 text-lg outline-none border-[3px] border-foSemiDark ${
            errors.username && focus.username
              ? "border-red-600"
              : !errors.username
              ? "border-green-500"
              : null
          }`}
        />
        {errors.username && firstSelection.username && (
          <span className="absolute top-full w-full text-red-600 mt-2 text-sm">
            {errors.username}
          </span>
        )}
      </div>

      <div
        className={`flex flex-col gap-1 relative transition-all duration-300 ${
          errors.password && firstSelection.password ? "mb-10" : null
        }`}
      >
        <label htmlFor="password" className="text-foDark text-xl">
          Password
        </label>
        <div className="relative text-foLight">
          <input
            type={viewPassword ? "text" : "password"}
            name="password"
            id="password"
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={focusHandler}
            className={`w-full bg-foSemiDark py-0.5 px-2 pr-9 text-lg outline-none border-[3px] border-foSemiDark ${
              errors.password && focus.password
                ? "border-red-600"
                : !errors.password
                ? "border-green-500"
                : null
            }`}
          />
          {viewPassword ? (
            <div onClick={() => setViewPassword(false)}>
              <EyeOffIcon
                className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer h-6 w-6"
                strokeWidth={2}
              />
            </div>
          ) : (
            <div onClick={() => setViewPassword(true)}>
              <EyeIcon
                className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer h-6 w-6"
                strokeWidth={2}
              />
            </div>
          )}
        </div>
        {errors.password && firstSelection.password && (
          <span className="absolute top-full w-full text-red-600 mt-2 text-sm">
            {errors.password}
          </span>
        )}
      </div>
      <button
        disabled={errors.username || errors.password ? true : false}
        className="bg-foSemiDark w-full h-8 mt-5 text-foLight text-lg hover:bg-foDark hover:transition-colors duration-300 disabled:bg-gray-600 disabled:text-foLight disabled:cursor-not-allowed"
      >
        Log In
      </button>
    </form>
  );
};

export default Login;
