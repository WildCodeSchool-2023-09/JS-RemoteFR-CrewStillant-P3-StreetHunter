import { Link, Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <div>
      <h1>Page d'Administration</h1>
      <Link to="/administration/artworks">Gérer les Oeuvres d'Art</Link>
      <Outlet />
    </div>
  );
}

export default AdminPage;
