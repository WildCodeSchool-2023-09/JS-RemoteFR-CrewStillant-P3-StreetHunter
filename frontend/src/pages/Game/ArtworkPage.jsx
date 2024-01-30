import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ArtworkPage() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(true);

  useEffect(() => {
    if (artwork) {
      try {
        axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/api/artwork/${id}`)
          .then((res) => setArtwork(res.data[0]));
      } catch (error) {
        console.error("Pas d'oeuvre recuperée", error);
      }
    }
  }, []);
  return (
    artwork && (
      <div className="flex flex-col items-center h-[78vh] m-4 md:m-12">
        <div className="bg-white bg-opacity-60 rounded-xl shadow-lg shadow-slate-800 p-4  2xl:max-w-2xl">
          <div className="p-4 text-center">
            <span className="font-semibold text-2xl">{artwork.title}</span>
          </div>
          <div className=" text-left">
            <span className="font-semibold mr-2">Artiste :</span>
            {artwork.artist_name}
          </div>

          <img
            className="w-full lg:w-[800px] my-12"
            src={artwork.path_pic}
            alt={artwork.title}
          />

          <div className=" text-left">
            <span className="font-semibold mr-2">Catégorie :</span>
            {artwork.cat_name}
          </div>
          <div className=" text-left">
            <span className="font-semibold mr-2">Description :</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </div>
        </div>
      </div>
    )
  );
}
