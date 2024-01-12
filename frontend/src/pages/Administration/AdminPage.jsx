import { Link, Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Link
        to="/administration/artworks"
        className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-blue-600 text-xl font-semibold mb-4"
      >
        LISTE DES STREET ARTS
      </Link>
      <Link
        to="/administration/users"
        className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-blue-600 text-xl font-semibold mb-4"
      >
        LISTE DES UTILISATEURS
      </Link>

      <Outlet />
    </div>
  );
}

export default AdminPage;
