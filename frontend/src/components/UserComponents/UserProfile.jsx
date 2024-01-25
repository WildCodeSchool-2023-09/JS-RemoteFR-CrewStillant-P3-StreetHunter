/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useOutletContext } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ModifButton from "../../assets/modifbtn.png";

export default function UserProfile() {
  const { auth } = useOutletContext();
  const decoded = auth && jwtDecode(auth.token);

  const [userInfo, setUserInfo] = useState(auth.user);
  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleEditButton = () => {
    setVisible(true);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/${decoded.sub}`)
      .then((res) => {
        setUserInfo(res.data);
        setUpdate(false);
      })
      .catch((err) => console.error(err));
  }, [update]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/${decoded.sub}`,
        data
      );
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col align-middle">
      <h2 className="text-center md:justify-normal md:mr-4 text-xl font-semibold text-primary">
        HEUREUX DE TE VOIR {userInfo.username}, BRAVO TU AS {userInfo.score}{" "}
        POINTS!
      </h2>
      <div className="flex flex-row justify-center">
        {visible ? (
          <form
            className="w-full max-w-2xl items-center mt-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-6 -mx-14">
              <div>
                <input
                  type="text"
                  className="mx-6 pl-2 rounded-xl py-2 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10"
                  placeholder="pseudo"
                  name="username"
                  {...register("username", {
                    minLength: {
                      value: 3,
                      message: "doit contenir au moins 3 caractères",
                    },
                  })}
                />
                {errors.username && (
                  <p role="alert" className="">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <input
                type="text"
                className="mx-6 pl-2 rounded-xl py-2 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
                placeholder="Prénom"
                name="firstname"
                {...register("firstname", {
                  minLength: {
                    value: 3,
                    message: "doit contenir au moins 3 caractères",
                  },
                })}
              />
              {errors.firstname && (
                <p role="alert" className="">
                  {errors.firstname.message}
                </p>
              )}
              <input
                type="text"
                className="mx-6 pl-2 rounded-xl py-2 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10"
                {...register("lastname", {
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
              <input
                type="email"
                className="mx-6 pl-2 rounded-xl py-2 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
                {...register("email", {
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
              <div className="flex flex-row">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="mx-6 pl-2 rounded-xl py-2 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
                  {...register("password", {
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/i,
                      message: "Doit contenir au minimum...",
                    },
                  })}
                  placeholder="Mot de passe"
                />
                {errors.password && (
                  <span className="text-black">{errors.password.message}</span>
                )}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🐵" : "🙈"}
                </button>
              </div>
              <div className="flex flex-row">
                <input
                  type="password"
                  name="confirmpassword"
                  className="mx-6 pl-2 rounded-xl py-2 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
                  {...register("confirmpassword", {
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/i,
                      message: "Doit contenir au minimum...",
                    },
                    validate: (value) =>
                      value === watch("password") ||
                      "Les mots de passe ne correspondent pas",
                  })}
                  placeholder="Confirmer mot de passe"
                />
                {errors.confirmpassword && (
                  <span className="text-black">
                    {errors.confirmpassword.message}
                  </span>
                )}{" "}
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "🐵" : "🙈"}
                </button>
              </div>

              <input
                type="text"
                className="mx-6 pl-2 rounded-xl py-2 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10"
                {...register("postalCode", {
                  minLength: {
                    value: 3,
                    message: "doit contenir au moins 3 caractères",
                  },
                })}
                placeholder="Code Postal"
              />
              <input
                type="text"
                className="mx-6 pl-2 rounded-xl py-2 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10"
                {...register("city", {
                  minLength: {
                    value: 3,
                    message: "doit contenir au moins 3 caractères",
                  },
                })}
                placeholder="Ville"
              />
            </div>
          </form>
        ) : (
          <div>
            <div> PSEUDO: {userInfo.username}</div>
            <div> PRENOM: {userInfo.firstname}</div>
            <div> NOM: {userInfo.lastname}</div>
            <div> EMAIL: {userInfo.email}</div>
            <div> VILLE: {userInfo.city}</div>
            <div> PAYS: {userInfo.firstname}</div>
          </div>
        )}
      </div>
      {!visible ? (
        <div className="flex flex-row justify-center mt-10">
          <button type="button" onClick={handleEditButton}>
            <img
              alt="button"
              src={ModifButton}
              className=" lg:w-[200px] w-[200px]"
            />
          </button>
        </div>
      ) : (
        <button onClick={() => setVisible(false)} type="submit">
          {" "}
          soumettre
        </button>
      )}
    </div>
  );
}
