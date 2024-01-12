import { Outlet } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import "./tailwind.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-responsivecity bg-contain lg:bg-city">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
