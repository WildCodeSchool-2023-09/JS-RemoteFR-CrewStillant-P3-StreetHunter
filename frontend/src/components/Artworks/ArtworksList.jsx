import React from "react";
import PropTypes from "prop-types";
import ArtworkCard from "./ArtworkCard";

function ArtworksList({ artworks, setIsUpdated }) {
  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-bold mb-8">Artworks List</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {artworks.map((artwork) => (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
            setIsUpdated={setIsUpdated}
          />
        ))}
      </div>
    </div>
  );
}

ArtworksList.propTypes = {
  artworks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setIsUpdated: PropTypes.func.isRequired,
};

export default ArtworksList;
