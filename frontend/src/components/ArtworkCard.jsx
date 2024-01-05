import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ArtworkCard({ artwork, setIsUpdated }) {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: artwork.title,
    adress: artwork.adress,
    validated: artwork.validated,
    categories_id: artwork.categories_id,
  });
  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/artwork/${artwork.id}`)
      .then(() => setIsUpdated(true));
  };

  const editArtwork = () => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/artwork/${artwork.id}`,
        formData
      )
      .then(() => {
        setIsUpdated(true);
        setFormVisible(false);
      });
  };

  const handleEditClick = () => {
    setFormVisible(true);
  };

  return (
    <div className="bg-white rounded-md p-6 mb-4 shadow-md">
      <div className="text-xl font-bold mb-2">{artwork.title}</div>
      <div className="mb-2">{artwork.adress}</div>
      <div className="mb-2">{artwork.validated ? "Validé" : "Non validé"}</div>
      <div className="mb-2">Catégorie ID: {artwork.categories_id}</div>
      <button
        type="button"
        onClick={handleEditClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Modifier
      </button>

      <Modal
        isOpen={formVisible}
        onRequestClose={() => setFormVisible(false)}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        className="bg-gray-300 rounded-lg p-6 max-w-md mx-auto"
      >
        <form>
          <button
            type="button"
            onClick={() => setFormVisible(false)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Annuler
          </button>
          <label className="block mb-2">
            Titre:
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="border rounded-md p-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Adresse:
            <input
              type="text"
              value={formData.adress}
              onChange={(e) =>
                setFormData({ ...formData, adress: e.target.value })
              }
              className="border rounded-md p-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Valide:
            <select
              value={formData.validated}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  validated: parseInt(e.target.value, 10),
                })
              }
              className="border rounded-md p-2 w-full"
            >
              <option value={0}>Non validé</option>
              <option value={1}>Validé</option>
            </select>
          </label>
          <label className="block mb-2">
            Catégorie ID:
            <select
              value={formData.categories_id}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  categories_id: parseInt(e.target.value, 10),
                })
              }
              className="border rounded-md p-2 w-full"
            >
              <option value={1}>Peinture</option>
              <option value={2}>Graph</option>
              <option value={3}>8bit</option>
              <option value={4}>Rétro</option>
            </select>
          </label>
          <button
            type="button"
            onClick={editArtwork}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Enregistrer
          </button>
        </form>
      </Modal>

      <button
        type="button"
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Supprimer
      </button>
    </div>
  );
}

ArtworkCard.propTypes = {
  artwork: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    adress: PropTypes.string,
    validated: PropTypes.number,
    categories_id: PropTypes.number,
  }).isRequired,

  setIsUpdated: PropTypes.func.isRequired,
};

export default ArtworkCard;
