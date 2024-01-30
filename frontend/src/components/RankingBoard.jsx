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
      <div className="mt-10 overflow-auto h-[68vh] mx-3 overflow-x-auto no-scrollbar">
        <table className="bg-slate-100 bg-opacity-60 px-5 lg:w-[50rem] text-start lg:text-center shadow-md rounded-xl">
          <thead className="sticky top-0 bg-slate-50 rounded-xl">
            <tr className="bg-blue-gray-100 text-[#004747] text-lg lg:text-3xl">
              <th className="pl-2 lg:text-center text-start">JOUEUR</th>
              <th className="text-start lg:text-center ">VILLE</th>
              <th className="py-3 pr-4 text-start lg:text-center">SCORE</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900 divide-y">
            {scoreDesc.map((e) => (
              <tr key={e.id} className="border-b  border-blue-gray-200">
                <td className="pl-2 py-3 ">{e.username}</td>
                <td className="py-3">{e.city}</td>
                <td className="py-3">{e.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RankingBoard;
