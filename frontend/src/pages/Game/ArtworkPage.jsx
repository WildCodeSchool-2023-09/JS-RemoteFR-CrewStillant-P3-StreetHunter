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
      <div className="artwork-page">
        <h1>{artwork.title}</h1>
        <h2>Par {artwork.artist_name}</h2>
        <img src={artwork.path_pic} alt={artwork.title} />
        <p>
          Où suis je? : {artwork.longitude}, {artwork.latitude}
        </p>
        <p>Quelle est ma catégorie? : {artwork.cat_name}</p>
        <p>
          Parlons de moi : Lorem ipsum dolor sit amet, consectetur adipiscing
          elit...
        </p>
      </div>
    )
  );
}
