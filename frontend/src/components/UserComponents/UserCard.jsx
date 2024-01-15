import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

function UserCard({ user, setIsUpdated }) {
  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/user/${user.id}`)
      .then(() => {
        setIsUpdated(true); // Met à jour l'état pour la suppression
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="bg-white bg-opacity-60 rounded-xl mb-4 p-3 shadow-md flex flex-col justify-center">
      {" "}
      <div>
        <strong>Joueur:</strong> {user.username}
      </div>
      <div>
        <strong>Nom:</strong> {user.lastname}
      </div>
      <div>
        <strong>Prénom:</strong> {user.firstname}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Score:</strong> {user.score}
      </div>
      <div>
        <strong>Ville:</strong> {user.city}
      </div>
      <div>
        <strong>Code Postal:</strong> {user.postal_code}
      </div>
      <div>
        <strong>Date d'inscription:</strong>
        {new Date(user.created_at).toLocaleString()}
        {/* new Date() est un constructeur qui crée un nouvel objet "Date".
        toLocaleString() est une méthode pour le formater et l'afficher. */}
      </div>
      <button
        type="button"
        onClick={handleDelete}
        className="mt-2 bg-red-500 text-white p-2 rounded mx-auto"
      >
        Supprimer
      </button>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postal_code: PropTypes.string.isRequired,
    is_admin: PropTypes.number.isRequired,
  }).isRequired,
  setIsUpdated: PropTypes.func.isRequired,
};

export default UserCard;
