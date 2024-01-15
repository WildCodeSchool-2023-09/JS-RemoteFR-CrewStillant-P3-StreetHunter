import PropTypes from "prop-types";

export default function GalleryCard({
  title,
  image,
  artist,
  category,
  adress,
}) {
  return (
    <div className="bg-white bg-opacity-60 flex flex-col justify-center rounded-md outline-offset-4 outline outline-1 outline-[#c58933] mb-4 p-3 shadow-md ">
      <div className="text-xl font-bold mb-2 text-center">{title}</div>
      <div className="mb-2 ">
        <img src={image} alt={title} width={300} />
      </div>
      <div className="mb-2 flex flex-row justify-center">
        <div className="font-semibold mr-2">Artiste : </div>
        <div>{artist}</div>
      </div>

      <div className="mb-2 flex flex-row justify-center">
        <div className="font-semibold mr-2">Adresse: </div>
        <div>{adress}</div>
      </div>
      <div className="mb-2 flex flex-row justify-center">
        <div className="font-semibold mr-2">Catégorie: </div>
        <div>{category}</div>
      </div>
    </div>
  );
}

GalleryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
};
