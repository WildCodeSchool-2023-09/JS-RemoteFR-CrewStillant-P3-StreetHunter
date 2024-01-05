import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1> Accueuil </h1>
      <Link to="/administration">Administration</Link>
      <Outlet />
    </>
  );
}

export default App;
