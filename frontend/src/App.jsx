import { Outlet } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import "./tailwind.css";

function App() {
  return (
    <div className="bg-responsivecity bg-no-repeat bg-cover lg:bg-city bg-contain">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
