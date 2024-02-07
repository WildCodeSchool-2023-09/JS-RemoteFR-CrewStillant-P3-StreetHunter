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
      <div className="flex flex-col  items-center m-4 md:m-12">
        <div className="overflow-y-auto no-scrollbar">
          <div className="bg-white  bg-opacity-60  max-w-[30rem] rounded-xl shadow-lg   p-4  2xl:max-w-2xl">
            <div className="p-4 text-center">
              <span className="font-semibold text-2xl">{artwork.title}</span>
            </div>

            <img
              className="w-full lg:w-[800px] md:max-w-[26rem] max-w-[12rem] m-auto  md:max-h-[25rem] max-h-[12rem] mb-4"
              src={artwork.path_pic}
              alt={artwork.title}
            />

            <div className="text-center  ">
              <span className="font-semibold mr-2">Artiste :</span>
              {artwork.artist_name}
            </div>
            <div className=" text-center ">
              <span className="font-semibold mr-2">Catégorie :</span>
              {artwork.cat_name}
            </div>
            <div className=" text-center  mb-4">
              <span className=" container font-semibold mr-2">
                Description :
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit max width
              ok mais la ca fait beaucoup
            </div>
          </div>
        </div>
      </div>
    )
  );
}
