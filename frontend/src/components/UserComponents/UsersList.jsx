import React from "react";
import PropTypes from "prop-types";
import UserCard from "./UserCard";

function UsersList({ users, setIsUpdated }) {
  return (
    <div className="text-center my-8">
      <div className="flex flex-wrap justify-center gap-4">
        {users.map((user) => (
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
