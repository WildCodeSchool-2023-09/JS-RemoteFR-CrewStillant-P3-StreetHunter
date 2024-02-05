/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useOutletContext, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import sendBtn from "../assets/button/sendBtn.png";

export default function ContactPage() {
  const { auth } = useOutletContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/messaging`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then(() => {
        toast.success("message envoyé!");
        navigate("/game/map");
      });
  };
  return (
    <div className="flex flex-col text-start justify-center items-center  h-[80vh]">
      <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-2 text-primary">
        CONTACT
      </h1>
      <div className="flex">
        <form
          className=" flex flex-col items-center gap-4 mt-4 w-[100vw]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-2xl text-primary font-semibold text-center"
            >
              TITRE
            </label>
            <input
              type="text"
              className="py-2 rounded-xl shadow-md shadow-slate-800 w-[15rem]  border-slate-800 md:w-[20rem] pl-3"
              {...register("title", {
                required: "champ obligatoire",
                minLength: {
                  value: 2,
                  message: "doit contenir au moins 2 caractères",
                },
              })}
              placeholder="Titre..."
            />
            {errors.title && (
              <p role="alert" className="mt-2 ml-2 font-semibold lg:ml-8">
                {" "}
                {errors.title.message}{" "}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="body"
              className="text-2xl text-primary font-semibold mb-1 text-center "
            >
              {" "}
              MESSAGE
            </label>
            <textarea
              name="body"
              rows={10}
              className="rounded-xl md:w-[30rem] w-[15em] shadow-md shadow-slate-800 border-slate-800 p-4 "
              {...register("body", {
                required: "champ obligatoire",
                minLength: {
                  value: 5,
                  message: "doit contenir au moins 5 caractères",
                },
              })}
              placeholder="Message..."
            />
            {errors.body && (
              <p
                role="alert"
                className="mt-2 ml-2 font-semibold lg:font-bold lg:ml-8"
              >
                {" "}
                {errors.body.message}{" "}
              </p>
            )}
          </div>
          <div className="flex flex-row justify-center">
            <button
              type="submit"
              className="shadow-xl hover:opacity-90 active:shadow-[0_-35px_-60px_-15px_rgba(0,0,0,0.3)]"
            >
              <img
                src={sendBtn}
                alt="button"
                className="w-[200px] lg:w-[250px]"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
