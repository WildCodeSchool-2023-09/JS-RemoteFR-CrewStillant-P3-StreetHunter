import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function GalleryCard({
  id,
  title,
  image,
  artist,
  category,
  adress,
}) {
  return (
    <div className="bg-white bg-opacity-60 flex flex-col justify-center rounded-md outline-offset-4 mb-4 p-3 shadow-md ">
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
      <Link to={`/game/artwork/${id}`} className="text-center mt-4">
        <button
          type="button"
          className="bg-[#339ec5] text-white font-semibold py-2 px-4 rounded"
        >
          Voir les détails
        </button>
      </Link>
    </div>
  );
}

GalleryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
