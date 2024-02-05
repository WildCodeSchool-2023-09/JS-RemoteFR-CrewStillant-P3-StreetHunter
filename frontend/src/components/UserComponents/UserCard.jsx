import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

function UserCard({ user, setIsUpdated }) {
  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/user/${user.id}`)
      .then(() => {
        setIsUpdated(true);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="overflow-y-scroll no-scrollbar bg-white bg-opacity-60 rounded-xl mb-4 p-3 shadow-md flex flex-col justify-center">
      <div>
        <span className="font-semibold mr-2">Joueur:</span>
        <span>{user.username}</span>
      </div>
      <div>
        <span className="font-semibold mr-2">Nom:</span>
        <span>{user.lastname}</span>
      </div>
      <div>
        <span className="font-semibold mr-2">Prénom:</span>
        <span>{user.firstname}</span>
      </div>
      <div>
        <span className="font-semibold mr-2">Email:</span>
        <span>{user.email}</span>
      </div>
      <div>
        <span className="font-semibold mr-2">Score:</span>
        <span>{user.score}</span>
      </div>
      <div>
        <span className="font-semibold mr-2">Ville:</span>
        <span>{user.city}</span>
      </div>
      <div>
        <span className="font-semibold mr-2">Code Postal:</span>
        <span>{user.postal_code}</span>
      </div>
      <div>
        <span className="font-semibold mr-2">Date d'inscription:</span>
        <span>{new Date(user.created_at).toLocaleString()}</span>
      </div>
      <button
        type="button"
        onClick={handleDelete}
        className="mt-2 bg-emerald-800 text-white p-2 rounded mx-auto"
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
