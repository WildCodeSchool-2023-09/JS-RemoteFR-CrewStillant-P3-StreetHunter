/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import axios from "axios";
import submitButton from "../assets/submitButton.png";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/messaging`, data);
  };
  return (
    <div>
      <h1 className=" flex flex-row justify-center font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 text-primary mt-0">
        CONTACT
      </h1>
      <div>
        <form
          className=" flex flex-col gap-8 mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-2xl text-primary font-semibold my-3 ml-4 lg:ml-10"
            >
              {" "}
              TITRE{" "}
            </label>
            <input
              type="text"
              className="py-2 mr-20 ml-2 rounded-xl shadow-md shadow-slate-800 border-2 border-slate-800 px-1 lg:mr-56 lg:ml-8"
              {...register("title", {
                required: "champ obligatoire",
                minLength: {
                  value: 2,
                  message: "doit contenir au moins 2 caractères",
                },
              })}
              placeholder="title"
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
              className="text-2xl text-primary font-semibold my-3 ml-4 lg:ml-10"
            >
              {" "}
              MESSAGE
            </label>
            <textarea
              name="body"
              rows={10}
              className="mr-14 ml-3 rounded-xl lg:h-92 shadow-md shadow-slate-800 border border-slate-800 p-4 lg:mr-32 lg:ml-8"
              {...register("body", {
                required: "champ obligatoire",
                minLength: {
                  value: 5,
                  message: "doit contenir au moins 5 caractères",
                },
              })}
              placeholder="body"
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
                src={submitButton}
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
