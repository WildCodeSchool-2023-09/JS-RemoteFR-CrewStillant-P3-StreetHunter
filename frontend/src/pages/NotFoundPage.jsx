import joke from "../assets/ezgif.com-resize.gif";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center font-extrabold text-4xl md:text-6xl mb-4 text-primary lg:mt-20">
        OUPS! ...
      </div>
      <div className="flex flex-col justify-center text-center mt-6 md:flex-row md:justify-between">
        <div className="mb-6 md:mb-0 md:w-1/2 text-xl md:text-4xl font-medium">
          <p className="mt-4 text-3xl md:mt-16 uppercase">
            oh non tu t'es trompé d'adresse 😥
          </p>
        </div>
        <div className="w-full flex flex-row justify-center md:w-1/2">
          <img
            className="rounded-full shadow-2xl border-2 border-green-200"
            alt="blague"
            src={joke}
          />
        </div>
      </div>
    </div>
  );
}
