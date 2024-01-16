/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useRef } from "react";
import axios from "axios";
import ModifButton from "../../assets/modifbtn.png";

export default function ProfileForm() {
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
    <div className="lg:mt-5 mt-5">
      img
      <form
        className="text-center lg:text-xl lg:font-extrabold"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 gap-y-4">
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
              type="text"
              className="mx-5 pl-2 rounded-xl py-3 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
              {...register("firstname", {
                required: "Champ obligatoire",
                minLength: {
                  value: 3,
                  message: "doit contenir au moins 3 caractères",
                },
              })}
              placeholder="Prénom"
            />
            {errors.firstname && (
              <p role="alert" className="">
                {errors.firstname.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              className="mx-10 pl-2 rounded-xl py-3 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10"
              {...register("lastname", {
                required: "Champ obligatoire",
                minLength: {
                  value: 3,
                  message: "doit contenir au moins 3 caractères",
                },
              })}
              placeholder="Nom"
            />
            {errors.lastname && (
              <p role="alert" className="">
                {errors.lastname.message}
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
              placeholder="@email.com"
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
              className="mx-14 pl-2 rounded-xl py-3 shadow-lg shadow-slate-800 lg:p-4 lg:text-xl lg:font-semibold lg:px-10"
              {...register("password", {
                required: "champ obligatoire",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                  message:
                    "doit contenir au moins 8 caractères dont au moins une majuscule, une miniscule, un chiffre et un caractère spécial ",
                },
              })}
              placeholder="mot de passe actuel"
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
              placeholder="nouveau mot de passe"
            />
            {errors.confirmpassword && (
              <p role="alert" className="">
                {errors.confirmpassword.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              className="mx-14 pl-2 rounded-xl py-3 shadow-lg shadow-slate-800 lg:p-4 lg:text-xl lg:font-semibold lg:px-10"
              {...register("postalCode", {
                required: "Champ obligatoire",
                minLength: {
                  value: 3,
                  message: "doit contenir au moins 3 caractères",
                },
              })}
              placeholder="Code Postal"
            />
          </div>
          <div>
            <input
              type="text"
              className="mx-14 pl-2 rounded-xl py-3 shadow-lg shadow-slate-800 lg:p-4 lg:text-xl lg:font-semibold lg:px-10"
              {...register("city", {
                required: "Champ obligatoire",
                minLength: {
                  value: 3,
                  message: "doit contenir au moins 3 caractères",
                },
              })}
              placeholder="Ville"
            />
          </div>
          <div className="mt-2">
            <button type="submit">
              <img
                alt="button"
                src={ModifButton}
                className="lg:w-[200px] w-[200px]"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
