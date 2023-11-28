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
    setErrors(validate({ ...form, [name]: value }));
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const type = e.type;
    const name = e.target.name;

    setFirstSelection({ ...firstSelection, [name]: true });
    setFocus({ ...focus, [name]: type === "focus" });
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
  }, []);

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-center gap-5 h-full w-full lg:w-2/5 px-10 py-10 lg:py-0 rounded-xl relative bg-foBlue"
    >
      <div className="mb-5 lg:mb-0 static lg:absolute top-3 left-0 right-0 text-center text-gray-700 text-base font-semibold flex flex-col">
        <span>
          *You can enter any username and password, it&apos;s all test.
        </span>
        <span>
          *Puedes ingresar cualquier nombre de usuario y contraseña, todo es de
          prueba.
        </span>
      </div>
      <div className="relative flex flex-col">
        <h2 className="text-4xl text-foDark font-medium underline select-none">
          Login
        </h2>
      </div>

      <div className="flex flex-col gap-1 relative">
        <label htmlFor="username" className="text-foDark text-xl">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Example123"
          value={form.username}
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={focusHandler}
          className={`w-full bg-foLight text-foDark py-0.5 px-2 text-lg outline-none rounded-2xl border-[3px] ${
            errors.username && focus.username && "border-red-700"
          }`}
        />
        {errors.username && firstSelection.username && (
          <span className="w-full text-red-700 mt-2 text-base">
            {errors.username}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1 relative">
        <label htmlFor="password" className="text-foDark text-xl">
          Password
        </label>
        <div className="relative text-foLight">
          <input
            type={viewPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="********"
            value={form.password}
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={focusHandler}
            className={`w-full bg-foLight text-foDark py-0.5 px-2 text-lg outline-none rounded-2xl border-[3px] ${
              errors.password && focus.password && "border-red-700"
            }`}
          />
          {viewPassword ? (
            <div onClick={() => setViewPassword(false)}>
              <EyeOffIcon
                className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer h-6 w-6 text-foDark"
                strokeWidth={2}
              />
            </div>
          ) : (
            <div onClick={() => setViewPassword(true)}>
              <EyeIcon
                className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer h-6 w-6 text-foDark"
                strokeWidth={2}
              />
            </div>
          )}
        </div>
        {errors.password && firstSelection.password && (
          <span className="w-full text-red-700 mt-2 text-base">
            {errors.password}
          </span>
        )}
      </div>
      <button
        disabled={errors.username || errors.password ? true : false}
        className="bg-foBlue w-full h-8 mt-5 text-foLight text-xl border-2 border-foLight disabled:bg-gray-400 disabled:cursor-not-allowed disabled:border-0 rounded-2xl hover:brightness-110 transition-all duration-200"
      >
        Log In
      </button>
    </form>
  );
};

export default Login;
