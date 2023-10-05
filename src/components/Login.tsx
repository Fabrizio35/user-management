"use client";
import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "@/Icons";
import { useRouter } from "next/navigation";

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

  if (!form.password) {
    errors.password = "Enter password";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(form.password)
  ) {
    errors.password =
      "The password must contain at least 8 characters, including an uppercase letter, a lowercase letter, and a number";
  }

  return errors;
};

const Login: React.FC = () => {
  const [form, setForm] = useState<InitialState>(initialState);
  const [errors, setErrors] = useState<InitialState>(initialState);
  const [focus, setFocus] = useState(initialState);
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const router = useRouter();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setErrors(
      validate({
        ...form,
        [name]: value,
      })
    );
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const name = e.target.name;

    setFocus({
      ...focus,
      [name]: name,
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  useEffect(() => {
    setErrors(validate(form));
  }, [form]);

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-5 bg-foLight px-20 py-36 rounded-xl border-2 border-foSemiDark relative"
    >
      <div className="relative flex flex-col">
        <h2 className="text-4xl text-foDark font-medium underline">Login</h2>
      </div>

      <div
        className={`flex flex-col gap-1 relative transition-all duration-300 ${
          errors.username && focus.username ? "mb-12" : null
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
          className="w-full bg-foSemiDark text-foLight p-1 px-2 text-xl outline-none"
        />
        {errors.username && focus.username && (
          <span className="absolute top-full w-full text-red-600 mt-1">
            {errors.username}
          </span>
        )}
      </div>

      <div
        className={`flex flex-col gap-1 relative transition-all duration-300 ${
          errors.password && focus.password ? "mb-12" : null
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
            className="w-full bg-foSemiDark p-1 px-2 pr-9 text-xl outline-none"
          />
          {viewPassword ? (
            <div onClick={() => setViewPassword(false)}>
              <EyeOffIcon className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" />
            </div>
          ) : (
            <div onClick={() => setViewPassword(true)}>
              <EyeIcon className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" />
            </div>
          )}
        </div>
        {errors.password && focus.password && (
          <span className="absolute top-full w-full text-red-600 mt-1">
            {errors.password}
          </span>
        )}
      </div>
      <button
        disabled={errors.username || errors.password ? true : false}
        className="absolute bottom-5 right-0 left-0 mx-auto bg-foSemiDark w-24 h-8 text-foLight text-lg hover:bg-foDark hover:transition-colors duration-300 disabled:bg-gray-600 disabled:text-foLight disabled:cursor-not-allowed"
      >
        Log In
      </button>
    </form>
  );
};

export default Login;