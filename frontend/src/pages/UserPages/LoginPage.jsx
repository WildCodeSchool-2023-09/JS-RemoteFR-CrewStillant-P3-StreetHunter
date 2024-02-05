import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import sendBtn from "../../assets/button/sendBtn.png";

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
    <div className="flex flex-col justify-center my-auto h-[76vh] text-primary ">
      <h1 className="text-center font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary">
        CONNEXION
      </h1>
      <form className="flex flex-col my-10 mx-auto " onSubmit={handleSubmit}>
        <div className="flex flex-col ">
          <label className="text-xl font-semibold" htmlFor="email">
            EMAIL{" "}
          </label>
          <input
            className=" mb-2 pl-2 rounded-xl py-3 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
            ref={emailRef}
            type="email"
            id="email"
            placeholder="email"
          />
        </div>
        <div className="flex flex-col justify-center">
          <label className="text-xl font-semibold" htmlFor="password">
            MOT DE PASSE
          </label>
          <input
            className=" mb-2 pl-2 rounded-xl py-3 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
            ref={passwordRef}
            type="password"
            id="password"
            placeholder="mot de passe"
          />
        </div>

        <button type="submit" className="mt-5">
          <img
            alt="sendbutton"
            className="lg:w-[300px] w-[200px] "
            src={sendBtn}
          />
        </button>
      </form>
    </div>
  );
}
