import { Outlet, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./tailwind.css";

function App() {
  return (
    <div className="bg-hero-pattern bg-contain pb-7">
      <NavBar />
      <Link to="/administration">Administration</Link>

      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
