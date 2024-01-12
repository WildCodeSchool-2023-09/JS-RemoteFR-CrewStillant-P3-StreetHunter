import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import ArtworksList from "../../components/Artworks/ArtworksList";

export default function ArtworksPage() {
  const artworks = useLoaderData();
  const [isUpdated, setIsUpdated] = useState(false);
  const [updatedArtworks, setUpdatedArtworks] = useState(artworks);

  useEffect(() => {
    if (isUpdated) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/artwork`)
        .then((res) => {
          setUpdatedArtworks(res.data);
          setIsUpdated(false);
        })
        .catch((e) => console.error(e));
    }
  }, [isUpdated]);

  return (
    <ArtworksList artworks={updatedArtworks} setIsUpdated={setIsUpdated} />
  );
}
