import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Navigation/Footer";

import "./tailwind.css";

function App() {
  const [auth, setAuth] = useState();

  return (
    <div className="flex flex-col  bg-responsivecity lg:bg-city bg-contain min-h-screen">
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
      <NavBar auth={auth} setAuth={setAuth} />
      <main className="flex-grow items-center ">
        <Outlet context={{ auth, setAuth }} />
      </main>
      <Footer />
    </div>
  );
}
export default App;
