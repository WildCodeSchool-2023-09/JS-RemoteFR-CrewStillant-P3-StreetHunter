import joke from "../assets/ezgif.com-resize.gif";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="text-center font-extrabold text-4xl md:text-6xl mb-4 text-primary">
        OUPS! ...
      </div>
      <div className="flex items-center text-center mt-4 md:flex-row md:justify-between md:gap-8">
        <div className="mb-6 md:mb-0 md:w-1/2 text-xl md:text-4xl font-medium">
          <p className="mt-4 text-3xl md:mt-16 uppercase">
            oh non tu t'es trompé d'adresse 😥
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="max-w-full mx-auto rounded-full shadow-2xl border-2 border-green-200"
            alt="blague"
            src={joke}
          />
        </div>
      </div>
    </div>
  );
}
