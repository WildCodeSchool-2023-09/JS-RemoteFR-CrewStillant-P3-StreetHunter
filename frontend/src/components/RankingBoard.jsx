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
    <>
      <div className="mt-6 pb-6 flex justify-center items-center">
        <div className=" w-80 rounded-md bg-blue-500 flex items-center justify-center p-4">
          <h1 className="text-white text-xl">Scores</h1>
        </div>
      </div>
      <div className="pb-96 mb-8 flex min-h-screen items-center justify-center">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl">
            <thead>
              <tr className="bg-blue-gray-100 text-gray-700">
                <th className="py-3 px-4 text-left">Username</th>
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
    </>
  );
}

export default RankingBoard;
