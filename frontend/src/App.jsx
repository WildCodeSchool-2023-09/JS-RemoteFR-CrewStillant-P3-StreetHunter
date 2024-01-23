import { Outlet } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Navigation/Footer";
import "./tailwind.css";

function App() {
  return (
    <div className="bg-responsivecity lg:bg-city bg-contain min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
