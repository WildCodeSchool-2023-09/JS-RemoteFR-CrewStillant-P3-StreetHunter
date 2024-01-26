import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import UserCard from "./UserCard";

function UsersList({ users, setIsUpdated }) {
  const [filteredUsername, setFilteredUsername] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleUsernameFilter = (e) => {
    setFilteredUsername(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const applyFilters = () => {
      setFilteredUsers(
        users.filter((u) => u.username.toLowerCase().includes(filteredUsername))
      );
    };

    applyFilters();
  }, [filteredUsername, users]);

  return (
    <div className="text-center my-8">
      <div className="flex justify-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Filtrer par joueur"
          onChange={handleUsernameFilter}
          className="text-lg rounded-md border-[1px] px-2"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} setIsUpdated={setIsUpdated} />
        ))}
      </div>
    </div>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setIsUpdated: PropTypes.func.isRequired,
};

export default UsersList;
