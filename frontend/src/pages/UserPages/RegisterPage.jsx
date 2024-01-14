import RegisterForm from "../../components/UserComponents/RegisterForm";

export default function RegisterPage() {
  return (
    <div>
      <h1 className=" flex flex-row justify-center font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 text-primary mt-0">
        {" "}
        INSCRIPTION{" "}
      </h1>
      <RegisterForm />
    </div>
  );
}
