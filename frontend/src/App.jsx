import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./tailwind.css";

function App() {
  return (
    <div className="pb-20 bg-gradient-to-b from-backgroundOne via-backgroundTwo to-backgroundThree">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
