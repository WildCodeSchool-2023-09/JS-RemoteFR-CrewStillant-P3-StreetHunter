import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Navigation/Footer";

import "./tailwind.css";

function App() {
  return (
    <div className="bg-responsivecity lg:bg-city bg-contain ">
      <ToastContainer />
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
