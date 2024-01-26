import { useLoaderData } from "react-router-dom";

import ArtworksList from "../../components/ArtworksAdmin/ArtworksList";

export default function ArtworksPage() {
  const dbartworks = useLoaderData();

  return (
    <div className="h-[77vh] overflow-auto">
      <ArtworksList artworks={dbartworks} />
    </div>
  );
}
