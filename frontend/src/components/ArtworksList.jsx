import axios from "axios";
import Proptypes from "prop-types";
import "../App.css";

export default function ArtworksList({ artworks, setIsUpdated }) {
  const handleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/artwork/${id}`)
      .then(() => setIsUpdated(true));
  };

  return (
    <div className="text-center my-8">
      <h1 className="text-3xl font-bold mb-4">Artworks List</h1>
      <ul>
        {artworks.map((a) => (
          <div key={a.id} className="mb-4">
            <li>{a.title}</li>
            <button
              type="button"
              onClick={() => handleDelete(a.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Supprimer
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

ArtworksList.propTypes = {
  artworks: Proptypes.arrayOf(Proptypes.shape).isRequired,
  setIsUpdated: Proptypes.func.isRequired,
};
