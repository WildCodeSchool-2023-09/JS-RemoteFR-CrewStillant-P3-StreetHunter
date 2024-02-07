/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import ModifButton from "../../assets/button/modifbtn.png";
import submit from "../../assets/button/submit.png";

export default function UserProfile() {
  const [userInfo, setUserInfo] = useState();
  const { auth } = useOutletContext();

  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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

  const resetValues = () => {
    reset({
      username: userInfo?.username || "",
      firstname: userInfo?.firstname || "",
      lastname: userInfo?.lastname || "",
      email: userInfo?.email || "",
      postalCode: userInfo?.postal_code || "",
      city: userInfo?.city || "",
    });
  };
  useEffect(() => {
    if (userInfo) {
      resetValues();
    }
  }, [userInfo]);
  const handleEditButton = () => {
    setVisible(true);
  };
  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/account`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        setUserInfo(res.data);
      })
      .finally(setUpdate(false));
  };

  useEffect(() => {
    if (update) fetchData();
  }, [update]);

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    const obj = data;
    for (const element in obj) {
      if (obj[element] === null || obj[element] === "") {
        delete obj[element];
      }
    }
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/`,
        obj,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      if (response.status === 200) {
        setUpdate(true);
        setVisible(false);
        toast.success(response.data.message);
      }
    } catch (e) {
      console.error(e);
      toast.error(e.response.data.message);
    }
  };

  return (
    <div className="flex flex-col">
      {visible ? (
        <div className="max-w-2xl mx-auto flex flex-row justify-center">
          <form className="max-w-2xl mt-20" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col align-middle gap-6 md:grid md:grid-cols-2 md:gap-6 md:-mx-14">
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
                value={userInfo?.email}
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
                  className=" lg:w-[250px] w-[200px]"
                />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className=" flex flex-col lg:flex-row justify-evenly align-middle mx-3 lg:mx-0 mt-10">
          <div className="bg-white lg:p-10 bg-opacity-50 rounded-lg shadow-lg shadow-slate-700 lg:text-xl lg:font-semibold ">
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
              <span className="font-semibold mr-2">CODE POSTAL:</span>
              {userInfo?.postal_code}
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            {userInfo?.is_admin === 0 && (
              <div>
                <h2 className="text-center text-l lg:text-3xl font-semibold text-primary">
                  Bravo {userInfo?.username}, tu as {userInfo?.score} points!
                </h2>
              </div>
            )}
            <div className="flex flex-row lg:mt-0 mt-5 justify-center lg:justify-end">
              <button type="button" onClick={handleEditButton}>
                <img
                  alt="button"
                  src={ModifButton}
                  className=" lg:w-[250px] w-[200px]"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
