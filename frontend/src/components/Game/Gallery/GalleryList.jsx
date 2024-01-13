import PropTypes from "prop-types";
import GalleryCard from "./GalleryCard";

export default function GalleryList({ dbartworks }) {
  const artworks = dbartworks;
  return (
    <div className="flex flex-col justify-start">
      <div className="lg:ml-10 flex flex-row lg:gap-10 lg:mb-6">
        <div>filtres</div>
        <input placeholder="titre" />
        <input placeholder="artiste" />
        <input placeholder="catégorie" />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {artworks &&
          artworks.map((art) => (
            <GalleryCard
              key={art.adress}
              title={art.title}
              artist={art.artist_name}
              image={art.path_pic}
              adress={(art.longitude, art.latitude)}
              category={art.cat_name}
            />
          ))}
      </div>
    </div>
  );
}

GalleryList.propTypes = {
  dbartworks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
