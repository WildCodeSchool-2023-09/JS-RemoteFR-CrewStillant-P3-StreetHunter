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
    axios.post("http://localhost:3310/api/user", data);
  };
  const passwordRef = useRef({});
  passwordRef.current = watch("password", "");

  return (
    <div>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <div>
            <label htmlFor="username" className="text-center">
              pseudo
            </label>
            <input
              type="text"
              className="mx-14 pl-2 rounded-md py-1 shadow-xl"
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
            <label htmlFor="email">adresse mail</label>
            <input
              type="email"
              className="mx-14 pl-2 rounded-md py-1 shadow-xl"
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
            <label htmlFor="password">mot de passe</label>
          </div>
          <input
            type="password"
            id="password"
            className="mx-14 pl-2 rounded-md py-1 shadow-xl"
            {...register("password", {
              required: "champ obligatoire",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                message:
                  "doit contenir au moins 8 caractères dont au moins un majuscule, un miniscule, un chiffre et un caractère spécial ",
              },
            })}
            placeholder="*****************"
          />
          {errors.password && (
            <p role="alert" className="">
              {" "}
              {errors.password.message}
            </p>
          )}
          <div>
            <label htmlFor="confirmpassword">
              confirmation du mot de passe
            </label>
            <input
              type="password"
              className="mx-14 pl-2 rounded-md py-1 shadow-xl"
              {...register("confirmpassword", {
                required: "champ obligatoire",
                validate: (value) =>
                  value === passwordRef.current ||
                  "mots de passe non similaires",
              })}
              placeholder="*****************"
            />
            {errors.confirmpassword && (
              <p role="alert" className="">
                {errors.confirmpassword.message}
              </p>
            )}
          </div>
          <div className="mt-4">
            <button type="submit">
              <img alt="button" src={Button} width={150} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
