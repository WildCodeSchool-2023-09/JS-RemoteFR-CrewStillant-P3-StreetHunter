import { Outlet } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import "./tailwind.css";

function App() {
  return (
    <div className="bg-responsivecity lg:bg-city ">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
