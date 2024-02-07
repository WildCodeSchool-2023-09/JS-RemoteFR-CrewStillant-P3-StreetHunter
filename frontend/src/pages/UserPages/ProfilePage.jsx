import { useOutletContext, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UserProfile from "../../components/UserComponents/UserProfile";

export default function ProfilePage() {
  const { auth } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/user/login");
    }
  }, []);
  return (
    <div className=" h-[84vh] flex flex-col">
      <h1 className="text-center font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary">
        PROFIL
      </h1>
      <UserProfile />
    </div>
  );
}
