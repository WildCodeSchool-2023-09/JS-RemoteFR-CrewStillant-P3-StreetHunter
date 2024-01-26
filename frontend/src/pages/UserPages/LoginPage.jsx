import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setAuth } = useOutletContext();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );
      if (response.status === 200) {
        const auth = await response.json();
        setAuth(auth);
        navigate("/game/map");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-row justify-center">
      <form
        className="flex justify-center flex-col items-center h-[85vh]"
        onSubmit={handleSubmit}
      >
        <label className="text-2xl font-semibold" htmlFor="email">
          EMAIL{" "}
        </label>
        <input
          className=" mb-8 *:mx-10 pl-2 rounded-xl py-3 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
          ref={emailRef}
          type="email"
          id="email"
        />
        <label className="text-2xl font-semibold" htmlFor="password">
          MOT DE PASSE
        </label>
        <input
          className=" mb-8 mx-10 pl-2 rounded-xl py-3 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
          ref={passwordRef}
          type="password"
          id="password"
        />
        <button
          className="mb-8 mx-10 pl-2 rounded-xl py-3 bg-sky-600 duration-200 hover:duration-200  text-white hover:bg-sky-50 hover:text-black lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10"
          type="submit"
        >
          ENVOYER
        </button>
      </form>
    </div>
  );
}
