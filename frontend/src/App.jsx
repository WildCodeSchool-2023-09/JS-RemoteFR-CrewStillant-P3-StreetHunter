import { Outlet } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import "./tailwind.css";

function App() {
  return (
    <div className="bg-city bg-[length:500px_588px] ">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
