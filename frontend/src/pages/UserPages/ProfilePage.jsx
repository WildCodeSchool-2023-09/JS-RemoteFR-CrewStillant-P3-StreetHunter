import UserProfile from "../../components/UserComponents/UserProfile";

export default function ProfilePage() {
  return (
    <div className=" h-[84vh] flex flex-col">
      <h1 className="text-center font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary">
        PROFIL
      </h1>
      <UserProfile />
    </div>
  );
}
