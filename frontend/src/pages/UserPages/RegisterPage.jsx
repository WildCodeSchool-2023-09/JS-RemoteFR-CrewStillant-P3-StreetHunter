import RegisterForm from "../../components/UserComponents/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex flex-col justify-center text-primary h-[85vh] overflow-auto">
      <h1 className="flex flex-row justify-center font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary h-[5rem]">
        INSCRIPTION
      </h1>
      <RegisterForm />
    </div>
  );
}
