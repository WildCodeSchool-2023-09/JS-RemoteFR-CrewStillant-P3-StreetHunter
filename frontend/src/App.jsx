import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./tailwind.css";

function App() {
  return (
    <div className="bg-city bg-contain ">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
