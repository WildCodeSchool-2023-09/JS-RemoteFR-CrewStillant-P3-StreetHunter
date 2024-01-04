import axios from "axios";
import Proptypes from "prop-types";
import { useState } from "react";

export default function ArtworksForm({ setIsUpdated }) {
  const [validatedArt, setValidatedArt] = useState(0);
  const [categorie, setCategorie] = useState(0);

  // Fonction pour gérer la soumission du formulaire
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Empeche le comportement par défaut, le rafraichissement de page

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/artwork`, {
        title: e.target[0].value, // valeur du premier champ du formulaire
        adress: e.target[1].value, // valeur du deuxieme champ du formulaire
        validated: validatedArt,
        categories_id: categorie,
      })

      .then(() => setIsUpdated(true));

    // Réinitialise les champs du formulaire après la soumission
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
          value={validatedArt}
          onChange={(e) => setValidatedArt(e.target.value)}
        >
          {/* Quand l'utilisateur sélectionne une option "e.target.value", setValidatedArt est appelé avec cette 
           nouvelle valeur et mety à jour validatedArt */}
          <option value={0}>Non validé</option>
          <option value={1}>Validé</option>
        </select>
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
        >
          {/* meme principe avec catégorie */}
          <option value={0}>Peinture</option>
          <option value={1}>Graph</option>
          <option value={2}>8bit</option>
          <option value={3}>Rétro</option>
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
