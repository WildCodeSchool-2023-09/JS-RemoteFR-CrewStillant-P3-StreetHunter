import axios from "axios";
import Proptypes from "prop-types";
import { useState } from "react";

export default function ArtworksForm({ setIsUpdated }) {
  const [categorie, setCategorie] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/artwork`, {
        title: e.target[0].value,
        adress: e.target[1].value,
        validated: false,
        categories_id: categorie,
      })

      .then(() => setIsUpdated(true));

    e.target[0].value = "";
    e.target[1].value = "";
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
          placeholder="Votre Titre ici"
        />
        <input
          type="text"
          required
          className="w-full p-2 mb-4 border rounded-md"
          placeholder="L'adresse ici"
        />

        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
        >
          <option value={0}>abstract</option>
          <option value={1}>realistic</option>
          <option value={2}>calligraphy</option>
          <option value={3}>retro</option>
        </select>
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
