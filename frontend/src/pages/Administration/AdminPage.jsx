import { useEffect } from "react";
import { Outlet, useOutletContext, useNavigate } from "react-router-dom";

function AdminPage() {
  const { auth } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/user/login");
    }
  }, []);

  return (
    <div>
      <h1 className="flex flex-row justify-center font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 text-primary mt-0">
        {" "}
        ADMINISTRATION
      </h1>
      <Outlet />
    </div>
  );
}

export default AdminPage;
