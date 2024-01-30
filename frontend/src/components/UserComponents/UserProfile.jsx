/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  useOutletContext,
  useRevalidator,
  useNavigate,
} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ModifButton from "../../assets/modifbtn.png";
import submit from "../../assets/submit.png";

export default function UserProfile() {
  const { auth } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/user/login");
    }
  }, []);
  const decoded = auth && jwtDecode(auth.token);
  const userInfo = auth?.user;
  const [visible, setVisible] = useState(false);
  const revalidator = useRevalidator();

  const handleEditButton = () => {
    setVisible(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: userInfo?.username,
      firstname: userInfo?.firstname,
      lastname: userInfo?.lastname,
      email: userInfo?.email,
      postalCode: userInfo?.postal_code,
      city: userInfo?.city,
    },
  });

  const onSubmit = async (data) => {
    const obj = data;
    for (const element in obj) {
      if (data[element] === "") {
        delete obj[element];
      }
    }
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/${decoded.sub}`,
        obj,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        revalidator.revalidate();
        setVisible(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col  align-middle ">
      <h2 className="text-center md:justify-normal  text-l font-semibold text-primary m-4">
        HEUREUX DE TE VOIR {userInfo?.username}, BRAVO TU AS {userInfo?.score}{" "}
        POINTS!
      </h2>
      {visible ? (
        <div className="mx-auto max-w-2xl  ">
          <form
            className="w-full max-w-2xl items-center mt-12 sm:my-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col my-10 align-middle gap-6 md:grid md:grid-cols-2 md:gap-6 md:-mx-14">
              <div>
                <input
                  type="text"
                  className="mx-6 pl-2 rounded-xl py-2 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10"
                  placeholder="pseudo"
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
            <div className="flex justify-center mt-4">
              <button type="submit">
                <img
                  alt="button"
                  src={submit}
                  className=" lg:w-[200px] w-[200px]"
                />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className=" mx-auto max-w-2xl  my-12">
          <div className="bg-white bg-opacity-60 pl-2 rounded-xl py-2 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 ">
            <div className="p-4 text-left">
              <span className="font-semibold mr-2">PSEUDO:</span>
              {userInfo?.username}
            </div>
            <div className="p-4 text-left">
              <span className="font-semibold mr-2">PRENOM:</span>
              {userInfo?.firstname}
            </div>
            <div className="p-4 text-left">
              <span className="font-semibold mr-2">NOM:</span>
              {userInfo?.lastname}
            </div>
            <div className="p-4 text-left">
              <span className="font-semibold mr-2">EMAIL:</span>
              {userInfo?.email}
            </div>
            <div className="p-4 text-left">
              <span className="font-semibold mr-2">VILLE:</span>
              {userInfo?.city}
            </div>
            <div className="p-4 text-left">
              <span className="font-semibold mr-2">PAYS:</span>
              {userInfo?.country}
            </div>
          </div>

          <div className="flex flex-row justify-center my-10">
            <button type="button" onClick={handleEditButton}>
              <img
                alt="button"
                src={ModifButton}
                className=" lg:w-[200px] w-[200px]"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
