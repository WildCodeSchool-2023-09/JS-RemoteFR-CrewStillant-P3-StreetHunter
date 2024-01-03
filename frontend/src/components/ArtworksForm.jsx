import axios from "axios";
import Proptypes from "prop-types";

export default function ArtworksForm({ setIsUpdated }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/artwork`, {
        title: e.target[0].value,
        adress: e.target[1].value,
        validated: 0,
        categories_id: 1,
      })
      .then(() => setIsUpdated(true));

    e.target[0].value = "";
  };

  return (
    <div className="text-center my-8">
      <form
        onSubmit={handleFormSubmit}
        className="mx-auto max-w-md p-4 border rounded-md"
      >
        <input
          type="text"
          required
          className="w-full p-2 mb-4 border rounded-md"
          placeholder="Votre texte ici"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}

ArtworksForm.propTypes = {
  setIsUpdated: Proptypes.func.isRequired,
};
