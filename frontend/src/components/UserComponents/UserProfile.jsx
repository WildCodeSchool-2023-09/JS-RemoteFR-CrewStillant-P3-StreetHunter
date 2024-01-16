import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
  const [userInfo, setUserInfo] = useState({ username: "", score: 0 });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user`)
      .then((res) => {
        setUserInfo({ username: res.data.username, score: res.data.score });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <h2 className="flex flex-row justify-between md:justify-normal md:mr-4 text-xl font-semibold text-primary">
      HEUREUX DE TE VOIR {userInfo.username}, BRAVO TU AS {userInfo.score}{" "}
      POINTS!
    </h2>
  );
}

export default UserProfile;
