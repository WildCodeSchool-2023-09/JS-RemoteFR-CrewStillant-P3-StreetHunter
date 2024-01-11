/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useRef } from "react";
import axios from "axios";
import Button from "../../assets/SignButton.png";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, data);
  };
  const passwordRef = useRef({});
  passwordRef.current = watch("password", "");

  return (
    <div className="lg:mt-14 mt-10">
      <form
        className="text-center lg:text-2xl lg:font-extrabold"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-12 lg:gap-10">
          <div>
            <input
              type="text"
              className="mx-10 pl-2 rounded-xl py-3 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
              {...register("username", {
                required: "Champ obligatoire",
                minLength: {
                  value: 3,
                  message: "doit contenir au moins 3 caractères",
                },
              })}
              placeholder="pseudo"
            />
            {errors.username && (
              <p role="alert" className="">
                {errors.username.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="email"
              className="mx-14 pl-2 rounded-xl py-3 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
              {...register("email", {
                required: "champ obligatoire",
                pattern: {
                  value: /\./,
                  message: "doit contenir un point",
                },
              })}
              placeholder="mappingart@email.com"
            />
            {errors.email?.message && (
              <p role="alert" className="">
                {" "}
                {errors.email.message || "Champ obligatoire"}{" "}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              id="password"
              className="mx-14 pl-2 rounded-xl py-3 shadow-lg shadow-slate-800 lg:p-4 lg:text-xl lg:font-semibold lg:px-10 "
              {...register("password", {
                required: "champ obligatoire",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                  message:
                    "doit contenir au moins 8 caractères dont au moins un majuscule, un miniscule, un chiffre et un caractère spécial ",
                },
              })}
              placeholder="mot de passe"
            />
            {errors.password && (
              <p role="alert" className="">
                {" "}
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              className="mx-14 pl-2 rounded-xl py-3 shadow-lg shadow-slate-800 lg:p-4 lg:text-xl lg:font-semibold lg:px-10 "
              {...register("confirmpassword", {
                required: "champ obligatoire",
                validate: (value) =>
                  value === passwordRef.current ||
                  "mots de passe non similaires",
              })}
              placeholder="verif du mot de passe"
            />
            {errors.confirmpassword && (
              <p role="alert" className="">
                {errors.confirmpassword.message}
              </p>
            )}
          </div>
          <div className="mt-4">
            <button type="submit">
              <img
                alt="button"
                src={Button}
                className="lg:w-[300px] w-[180px]"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
