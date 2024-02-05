import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Navigation/Footer";

import "./tailwind.css";

function App() {
  const [auth, setAuth] = useState();

  return (
    <div className="flex flex-col bg-responsivecity lg:bg-city bg-contain min-h-screen">
      <NavBar auth={auth} setAuth={setAuth} />
      <main className="flex-grow items-center">
        <Outlet context={{ auth, setAuth }} />
      </main>
      <Footer />
    </div>
  );
}
export default App;
