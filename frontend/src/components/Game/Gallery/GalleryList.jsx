import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import GalleryCard from "./GalleryCard";

export default function GalleryList({ dbartworks }) {
  const artworks = dbartworks;
  const [filteredTitle, setFilteredTitle] = useState("");
  const [filteredArtist, setFilteredArtist] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("null");
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);
  const [isVisible, setIsVisible] = useState(false);
  const [categ, setCateg] = useState();

  const handleDisplayFilters = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/category`)
      .then((res) => {
        setCateg(res.data);
      });
  }, []);
  const handleTitleFilter = (e) => {
    const titleInputValue = e.target.value.toLowerCase();
    setFilteredTitle(titleInputValue);
    setFilteredArtworks(
      artworks.filter(
        (a) =>
          a.title.toLowerCase().includes(titleInputValue) &&
          (filteredArtist === "" ||
            a.artist_name.toLowerCase().includes(filteredArtist)) &&
          (filteredCategory === "null" || a.cat_name === filteredCategory)
      )
    );
  };

  const handleArtistFilter = (e) => {
    const artistInputValue = e.target.value.toLowerCase();
    setFilteredArtist(artistInputValue);
    setFilteredArtworks(
      artworks.filter(
        (a) =>
          a.artist_name.toLowerCase().includes(artistInputValue) &&
          (filteredCategory === "null" || a.cat_name === filteredCategory) &&
          (filteredTitle === "" ||
            a.title.toLowerCase().includes(filteredTitle))
      )
    );
  };

  const handleCategoryFilter = (e) => {
    const categorySelected = e.target.value;
    setFilteredCategory(categorySelected);
    setFilteredArtworks(
      artworks.filter(
        (a) =>
          (categorySelected === "null" || a.cat_name === categorySelected) &&
          (filteredTitle === "" ||
            a.title.toLowerCase().includes(filteredTitle)) &&
          (filteredArtist === "" ||
            a.artist_name.toLowerCase().includes(filteredArtist))
      )
    );
  };
  return (
    <div className="flex flex-col justify-start">
      <div className="lg:ml-10 flex lg:flex-row flex-col lg:gap-10 lg:mb-6 my-6">
        <button
          type="button"
          onClick={handleDisplayFilters}
          className="font-semibold"
        >
          FILTRER
        </button>
        <div
          className={`transition-opacity ease-in duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Modal
            isOpen={isVisible}
            onRequestClose={() => setIsVisible(false)}
            overlayClassName="fixed inset-0 bg-backgroundThree bg-opacity-10 flex flex-col justify-end lg:hidden"
            className="bg-backgroundThree bg-opacity-90 rounded-lg p-6 max-w-md mx-auto  lg:hidden"
          >
            <div className="lg:hidden flex flex-col gap-6 p-10">
              <input
                placeholder="titre"
                className="text-xl text-primary rounded-md border-[1px] px-2 border-primary"
                onChange={handleTitleFilter}
              />
              <input
                placeholder="artiste"
                className="text-xl text-primary rounded-md border-[1px]  px-2 border-primary"
                onChange={handleArtistFilter}
              />
              <select
                className="h-9 text-primary rounded-md border-[1px]  px-2  border-primary"
                onChange={handleCategoryFilter}
              >
                <option className="text-xl" value="null">
                  {" "}
                  ---{" "}
                </option>
                {categ &&
                  categ.map((c) => (
                    <option key={c.id} className="text-lg" value={c.cat_name}>
                      {" "}
                      {c.cat_name}{" "}
                    </option>
                  ))}
              </select>
            </div>
          </Modal>
          <div className="md:visible md:flex lg:flex-row lg:gap-10 hidden">
            <input
              placeholder="titre"
              className="text-xl text-primary rounded-md border-[1px] px-2 border-primary"
              onChange={handleTitleFilter}
            />
            <input
              placeholder="artiste"
              className="text-xl text-primary rounded-md border-[1px]  px-2 border-primary"
              onChange={handleArtistFilter}
            />
            <select
              className="h-9 text-primary rounded-md border-[1px]  px-2  border-primary"
              onChange={handleCategoryFilter}
            >
              <option className="text-xl" value="null">
                {" "}
                ---{" "}
              </option>
              {categ &&
                categ.map((c) => (
                  <option key={c.id} className="text-lg" value={c.cat_name}>
                    {" "}
                    {c.cat_name}{" "}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {filteredArtworks.length &&
          filteredArtworks.map((art) => (
            <GalleryCard
              key={art.id}
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
