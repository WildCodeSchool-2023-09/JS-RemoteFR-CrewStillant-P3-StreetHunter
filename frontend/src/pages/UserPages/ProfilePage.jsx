import ProfileForm from "../../components/UserComponents/ProfileForm";
import UserProfile from "../../components/UserComponents/UserProfile";

export default function ProfilePage() {
  return (
    <div className="h-[100vh]">
      <h1 className=" flex flex-row justify-center font-extrabold text-2xl md:text-5xl lg:text-3xl mb-4 text-primary mt-0">
        {" "}
        PROFIL{" "}
      </h1>
      <UserProfile />
      <ProfileForm />
    </div>
  );
}
