import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="bg-[#97DBF5] h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
