export default function GameRules() {
  return (
    <div>
      <h1 className="flex flex-row justify-center font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary">
        {" "}
        LE JEU{" "}
      </h1>
      <article className="lg:mx-60 mx-8 bg-[#f2f2f2af]  p-4 lg:p-20 text-start text-2xl rounded-xl mt-16">
        <p className="indent-1 lg:leading-loose leading-snug">
          <b>Explorez votre ville.</b>
          <br /> Prenez en photo les street arts trouvés et envoyez-les ! <br />{" "}
          Plus vous en ajoutez sur la carte, meilleur sera votre score. <br />{" "}
          Inscrivez-vous et prenez la tête du classement!
        </p>
      </article>
    </div>
  );
}
