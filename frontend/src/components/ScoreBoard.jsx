import React, { useState, useEffect } from "react";
import axios from "axios";

function ScoreBoard() {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user`)
      .then((res) => {
        // Assurez-vous que la réponse de l'API est un tableau d'objets
        setScores(res.data); // res.data.results est le tableau d'utilisateurs
      })
      .catch((error) => {
        console.error("There was an error fetching the scores!", error);
      });
  }, []);

  return (
    <>
      <div className="mt-6 pb-6 flex justify-center items-center">
        <div className=" w-80 rounded-md bg-blue-500 flex items-center justify-center p-4">
          <h1 className="text-white text-xl">Ranking Board</h1>
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
              {scores.map((e) => (
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
      <div className="w-full pt-5 px-4 mb-8 mx-auto ">
        <div className="text-sm text-gray-700 py-1 text-center">
          Made with{" "}
          <a
            className="text-gray-700 font-semibold"
            href="https://www.material-tailwind.com/docs/html/table/?ref=tailwindcomponents"
            target="_blank"
            rel="noreferrer noopener"
          >
            Material Tailwind
          </a>{" "}
          by{" "}
          <a
            href="https://www.creative-tim.com?ref=tailwindcomponents"
            className="text-gray-700 font-semibold"
            target="_blank"
            rel="noreferrer noopener"
          >
            Creative Tim
          </a>
        </div>
      </div>
    </>
  );
}

export default ScoreBoard;
