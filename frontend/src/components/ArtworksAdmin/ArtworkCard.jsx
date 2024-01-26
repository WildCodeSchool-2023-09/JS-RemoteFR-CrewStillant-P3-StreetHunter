import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ArtworkCard({ artwork, setIsUpdated }) {
  const [formVisible, setFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    path_pic: artwork.path_pic,
    title: artwork.title,
    longitude: artwork.longitude,
    latitude: artwork.latitude,
    validated: artwork.validated,
    category_id: artwork.category_id,
    artist_id: artwork.artist_id,
    user_id: artwork.user_id,
  });

  const [users, setUsers] = useState([]);
  const [artists, setArtists] = useState([]);

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

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user`)
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/artist`)
      .then((response) => {
        setArtists(response.data);
      });
  }, []);

  const handleEditClick = () => {
    setFormVisible(true);
  };

  return (
    <div className="bg-white bg-opacity-60 rounded-xl mb-4 p-3 shadow-md flex flex-col justify-center">
      <div className="text-xl font-bold mb-2">{artwork.title}</div>
      <div className="mb-2 ml-7 ">
        <img
          className="rounded-xl min-h-[250px] max-h-[250px] "
          src={artwork.path_pic}
          alt={artwork.title}
          width={300}
        />
      </div>
      <div className="mb-2 flex flex-row justify-center">
        <div className="font-semibold mr-2">Artiste : </div>
        <div>{artwork.artist_name}</div>
      </div>
      <div className="mb-2 flex flex-row justify-center">
        <div className="font-semibold mr-2">Joueur: </div>
        <div>{artwork.username}</div>
      </div>
      <div className="mb-2 flex flex-row justify-center">
        <div className="font-semibold mr-2">Adresse: </div>
        <div>{`Lat ${artwork.latitude}- Long ${artwork.longitude}`}</div>
      </div>
      <div className="mb-2 flex flex-row justify-center">
        <div className="font-semibold mr-2">Catégorie: </div>
        <div>{artwork.cat_name}</div>
      </div>

      <div className="mb-2">{artwork.validated ? "Validé" : "Non validé"}</div>

      <div className="flex flex-row justify-center gap-4">
        <button
          type="button"
          onClick={handleEditClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
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
              Image URL:
              <input
                type="text"
                value={formData.path_pic}
                onChange={(e) =>
                  setFormData({ ...formData, path_pic: e.target.value })
                }
                className="border rounded-md p-2 w-full"
              />
            </label>

            <label className="block mb-2">
              Longitude:
              <input
                type="text"
                value={formData.longitude}
                onChange={(e) =>
                  setFormData({ ...formData, longitude: e.target.value })
                }
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Latitude:
              <input
                type="text"
                value={formData.latitude}
                onChange={(e) =>
                  setFormData({ ...formData, latitude: e.target.value })
                }
                className="border rounded-md p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Etat:
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
              Catégorie:
              <select
                value={formData.category_id}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category_id: parseInt(e.target.value, 10),
                  })
                }
                className="border rounded-md p-2 w-full"
              >
                <option value="1">retro</option>
                <option value="2">caligraphy</option>
                <option value="3">abstract</option>
                <option value="4">realistic</option>
              </select>
            </label>
            <label className="block mb-2">
              Artist:
              <select
                value={formData.artist_id}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    artist_id: parseInt(e.target.value, 10),
                  })
                }
                className="border rounded-md p-2 w-full"
              >
                {artists.map((artist) => (
                  <option key={artist.id} value={artist.id}>
                    {artist.artist_name}
                  </option>
                ))}
              </select>
            </label>
            <label className="block mb-2">
              User Name:
              <select
                value={formData.user_id}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    user_id: parseInt(e.target.value, 10),
                  })
                }
                className="border rounded-md p-2 w-full"
              >
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.username}
                  </option>
                ))}
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
    </div>
  );
}

ArtworkCard.propTypes = {
  artwork: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    path_pic: PropTypes.string,
    username: PropTypes.string,
    longitude: PropTypes.number,
    latitude: PropTypes.number,
    validated: PropTypes.number.isRequired,
    category_id: PropTypes.number,
    artist_id: PropTypes.number,
    user_id: PropTypes.number,
    cat_name: PropTypes.string,
    artist_name: PropTypes.string,
  }).isRequired,

  setIsUpdated: PropTypes.func.isRequired,
};

export default ArtworkCard;
