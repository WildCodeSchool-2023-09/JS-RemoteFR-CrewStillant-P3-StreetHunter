/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../assets/signUpButton.png";

export default function RegisterForm() {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const passwordRef = useRef({});
  passwordRef.current = watch("password", "");

  const notify = () =>
    toast.warn("Les conditions d'utilisations n'ont pas été acceptées");

  const onSubmit = (data) => {
    if (checked) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, data)
        .then(navigate("/user/login"));
    }
  };

  return (
    <div className="lg:mt-4 mt-10 w-auto h-[71vh] overflow-scroll overflow-x-hidden">
      <form
        className="text-center lg:text-2xl lg:font-extrabold"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4">
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
              <p role="alert" className="text-lg font-light">
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
              <p role="alert" className="text-lg font-light">
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
                    "doit contenir au moins 8 caractères dont au moins une majuscule, une miniscule, un chiffre et un caractère spécial ",
                },
              })}
              placeholder="mot de passe"
            />
            {errors.password && (
              <p role="alert" className="text-lg font-light">
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
              <p role="alert" className="text-lg font-light">
                {errors.confirmpassword.message}
              </p>
            )}
          </div>
          <p className="mx-7 text-base font-light bg-slate-200 lg:mx-96 bg-opacity-70 rounded-xl ">
            {" "}
            Pour utiliser Mapping Art, vous devez accepter les
            <Link
              to="/instructions"
              className="font-semibold ml-3 hover:underline"
            >
              conditions d'utilisation
            </Link>
          </p>
          <div className="flex flex-row justify-center">
            <input
              type="checkbox"
              onChange={handleCheck}
              className="w-6 h-6 rounded-full"
            />
            <p className="ml-2 font-semibold"> J'ACCEPTE</p>
          </div>
          <div>
            <button type="submit" onClick={!checked && notify}>
              <img
                alt="button"
                src={Button}
                className="lg:w-[300px] w-[200px] transform animate-zoom-in-out duration-1000 "
              />
            </button>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              toastClassName="rounded-md text-lg"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
