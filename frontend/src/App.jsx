import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import "./tailwind.css";

function App() {
  return (
    <div className="bg-hero-pattern bg-contain pb-7">
      <ToastContainer />
      <NavBar />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
