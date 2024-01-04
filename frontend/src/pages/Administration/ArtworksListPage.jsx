import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import ArtworksList from "../../components/ArtworksList";
import ArtworksForm from "../../components/NewArtwork";

export default function ArtworksPage() {
  // récupere les données
  const artworks = useLoaderData();

  // Déclaration de l'état pour suivre si une maj est nécessaire
  const [isUpdated, setIsUpdated] = useState(false);
  // Déclaration de l'état pour gérer les maj
  const [updatedArtworks, setUpdatedArtworks] = useState(artworks);

  useEffect(() => {
    if (isUpdated) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/artwork`)
        .then((res) => {
          setUpdatedArtworks(res.data); // Met à jour avec les nouvelles données
          setIsUpdated(false); // Réinitialise l'état isUpdated
        })
        .catch((e) => console.error(e));
    }
    setIsUpdated(false);
  }, [isUpdated]); // Le useEffect s'exécute quand isUpdated change

  return (
    <>
      <h1>Artworks page</h1>
      <ArtworksList artworks={updatedArtworks} setIsUpdated={setIsUpdated} />
      <ArtworksForm setIsUpdated={setIsUpdated} />
    </>
  );
}
