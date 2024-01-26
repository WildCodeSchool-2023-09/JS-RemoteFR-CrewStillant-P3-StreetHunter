import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import axios from "axios";

function validationRoom() {
  const [artWork, setArtwork] = useState();
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/artwork/notvalidated`)
      .then((res) => {
        setArtwork(res.data);
        setUpdate(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the artwork", error);
      });
  }, [update]);

  function scoreValidation(id) {
    const pointsToAdd = 250;
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/user/${id}/addscore`, {
        score: pointsToAdd,
      })
      .then(() => {
        toast.success("Image validée ! 250 points distribués au joueur");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleValidation = (id) => {
    const isValidated = true;

    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/artwork/${id}/validate`, {
        validated: isValidated,
      })
      .then(() => {
        scoreValidation(id);
        setUpdate(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/artwork/${id}`)
      .then(() => setUpdate(true));
  };

  return (
    <div className="h-full min-h-screen">
      <div className="flex items-center justify-center gap-5">
        <div className="flex flex-row flex-wrap gap-5 items-center justify-center mt-6">
          {artWork &&
            artWork.map((e) => (
              <div
                key={e.id}
                className="flex-row max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg"
                  src={e.path_pic}
                  alt={e.title}
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="p-5">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Titre: {e.title}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Nom du joueur : {e.username}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Identifiant du joueur : {e.user_id}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {e.longitude} {e.longitude}
                  </p>
                  <div className="flex flox-row justify-center gap-4 mt-4 ">
                    <button
                      type="button"
                      aria-label="Validate"
                      onClick={() => handleValidation(e.id)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Valider
                    </button>
                    <button
                      type="button"
                      aria-label="delete"
                      onClick={() => handleDelete(e.id)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default validationRoom;
