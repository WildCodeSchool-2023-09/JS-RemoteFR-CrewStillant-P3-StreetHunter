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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input ref={emailRef} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password"> MOT DE PASSE</label>
          <input ref={passwordRef} type="password" id="password" />
        </div>
        <button type="submit">ENVOYER</button>
      </form>
    </div>
  );
}
