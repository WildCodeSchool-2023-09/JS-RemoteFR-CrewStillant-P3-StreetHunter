import React, { useState, useEffect } from "react";
import axios from "axios";

function RankingBoard() {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user`)
      .then((res) => {
        setScores(res.data); //
      })
      .catch((error) => {
        console.error("There was an error fetching the scores!", error);
      });
  }, []);

  const scoreDesc = scores.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <div className="flex flex-row justify-center">
      <div className="mt-10 overflow-auto h-[68vh] no-scrollbar">
        <table className="bg-slate-100 bg-opacity-60 lg:w-[60rem] shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700  text-3xl">
              <th className="py-3 px-4 text-left ">Username</th>
              <th className="py-3 px-4 text-left">City</th>
              <th className="py-3 px-4 text-left">score</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            {scoreDesc.map((e) => (
              <tr key={e.id} className="border-b border-blue-gray-200">
                <td className="py-3 px-4">{e.username}</td>
                <td className="py-3 px-4">{e.city}</td>
                <td className="py-3 px-4">{e.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RankingBoard;
