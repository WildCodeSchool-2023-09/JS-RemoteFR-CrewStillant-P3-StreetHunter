import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function AdminPage() {
  const [page, setPage] = useState();
  const adminLinks = [
    {
      name: "LISTE DES STREET ARTS",
      path: "/administration/artworks",
    },
    {
      name: "LISTE DES UTILISATEURS",
      path: "/administration/users",
    },
    {
      name: "WAITING VALIDATION",
      path: "/administration/validationroom",
    },
  ];
  const handlePage = (e) => {
    setPage(e.target.text);
  };
  return (
    <div className="flex flex-col items-center justify-center h-[85vh] ">
      <div className="flex flex-row lg:gap-8 gap-3 mx-2 lg:mx-0">
        {adminLinks.map((l) =>
          page === l.name ? (
            <Link
              key={l.name}
              onClick={handlePage}
              to={l.path}
              className="bg-slate-50  text-[#866940] lg:px-4 px-3  lg:py-2 my-2 lg-mb-0 rounded-md  lg:text-xl font-semibold shadow-inner shadow-[9px 19px 33px 17px] border-2 border-[#5f8159] shadow-black"
            >
              {l.name}
            </Link>
          ) : (
            <Link
              key={l.name}
              onClick={handlePage}
              to={l.path}
              className="bg-white text-slate-800 lg:px-4 px-3  lg:py-2 my-2 lg-mb-0  rounded-md shadow-lg shadow-slate-500 hover:bg-[#cfebf7] active:shadow-inner lg:text-xl font-semibold"
            >
              {l.name}
            </Link>
          )
        )}
      </div>

      <Outlet />
    </div>
  );
}

export default AdminPage;
