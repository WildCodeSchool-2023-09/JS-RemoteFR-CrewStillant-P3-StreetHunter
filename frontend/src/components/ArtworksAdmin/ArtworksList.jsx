import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Modal from "react-modal";
import ArtworkCard from "./ArtworkCard";

function ArtworksList({ artworks, setIsUpdated }) {
  const [filteredTitle, setFilteredTitle] = useState("");
  const [filteredArtist, setFilteredArtist] = useState("");
  const [filteredUser, setFilteredUser] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("null");
  const [filteredStatus, setFilteredStatus] = useState(null);
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
          (filteredCategory === "null" || a.cat_name === filteredCategory) &&
          (filteredUser === "" ||
            a.username.toLowerCase().includes(filteredUser)) &&
          (filteredStatus === null || a.validated === filteredStatus)
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
            a.title.toLowerCase().includes(filteredTitle)) &&
          (filteredUser === "" ||
            a.username.toLowerCase().includes(filteredUser)) &&
          (filteredStatus === null || a.validated === filteredStatus)
      )
    );
  };
  const handleCategoryFilter = (e) => {
    const categorySelected = e.target.value;
    setFilteredCategory(categorySelected);
    setFilteredArtworks(
      categorySelected !== "null"
        ? artworks.filter(
            (a) =>
              a.cat_name === categorySelected &&
              (filteredTitle === "" ||
                a.title.toLowerCase().includes(filteredTitle)) &&
              (filteredArtist === "" ||
                a.artist_name.toLowerCase().includes(filteredArtist)) &&
              (filteredUser === "" ||
                a.username.toLowerCase().includes(filteredUser)) &&
              (filteredStatus === null || a.validated === filteredStatus)
          )
        : artworks
    );
  };

  const handleUserFilter = (e) => {
    const userSelectedValue = e.target.value.toLowerCase();
    setFilteredUser(userSelectedValue);
    setFilteredArtworks(
      artworks.filter(
        (a) =>
          a.username.toLowerCase().includes(userSelectedValue) &&
          (filteredTitle === "" ||
            a.title.toLowerCase().includes(filteredTitle)) &&
          (filteredArtist === "" ||
            a.artist_name.toLowerCase().includes(filteredArtist)) &&
          (filteredCategory === "null" || a.cat_name === filteredCategory) &&
          (filteredStatus === null || a.validated === filteredStatus)
      )
    );
  };

  const handleStatusFilter = (e) => {
    const statusSelected = parseInt(e.target.value, 10);
    setFilteredStatus(statusSelected);
    setFilteredArtworks(
      artworks.filter(
        (a) =>
          (statusSelected === null || a.validated === statusSelected) &&
          (filteredTitle === "" ||
            a.title.toLowerCase().includes(filteredTitle)) &&
          (filteredArtist === "" ||
            a.artist_name.toLowerCase().includes(filteredArtist)) &&
          (filteredCategory === "null" || a.cat_name === filteredCategory) &&
          (filteredUser === "" ||
            a.username.toLowerCase().includes(filteredUser))
      )
    );
  };

  return (
    <div className="text-center my-8">
      <div className="lg:ml-10 flex lg:flex-row flex-col lg:gap-10 lg:mb-6 my-6">
        <button
          type="button"
          onClick={handleDisplayFilters}
          className="font-semibold lg:text-xl underline underline-offset-2 hover:font-medium"
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
            className="bg-backgroundThree  rounded-t-xl outline outline-1 outline-primary  max-w-md  lg:hidden"
          >
            <div className="lg:hidden flex flex-col gap-6 p-10">
              <input
                placeholder="PAR TITRE"
                className="text-xl text-primary rounded-md border-[1px] px-2 border-primary"
                onChange={handleTitleFilter}
              />
              <input
                placeholder="PAR ARTISTE"
                className="text-xl text-primary rounded-md border-[1px]  px-2 border-primary"
                onChange={handleArtistFilter}
              />
              <input
                placeholder="PAR JOUEUR"
                className="text-xl text-primary rounded-md border-[1px]  px-2 border-primary"
                onChange={handleUserFilter}
              />
              <select
                className="h-9 text-primary rounded-md border-[1px]  px-2  border-primary"
                onChange={handleCategoryFilter}
              >
                <option className="text-lg text-gray-100" value="null">
                  {" "}
                  PAR CATEGORIE{" "}
                </option>
                {categ &&
                  categ.map((c) => (
                    <option key={c.id} className="text-lg" value={c.cat_name}>
                      {" "}
                      {c.cat_name}{" "}
                    </option>
                  ))}
              </select>
              <select
                className="h-9 text-primary rounded-md border-[1px]  px-2  border-primary"
                onChange={handleStatusFilter}
              >
                <option value={null}> PAR STATUT</option>
                <option value={0}> NON VALIDE </option>
                <option value={1}> VALIDE</option>
              </select>
            </div>
          </Modal>
          <div className="md:visible md:flex lg:flex-row lg:gap-2 hidden">
            <input
              placeholder="PAR TITRE"
              className="text-lg text-primary rounded-md border-[1px] px-2 border-primary"
              onChange={handleTitleFilter}
            />
            <input
              placeholder="PAR ARTISTE"
              className="text-lg text-primary rounded-md border-[1px]  px-2 border-primary"
              onChange={handleArtistFilter}
            />
            <input
              placeholder="PAR JOUEUR"
              className="text-lg text-primary rounded-md border-[1px]  px-2 border-primary"
              onChange={handleUserFilter}
            />
            <select
              className="h-9 text-primary rounded-md border-[1px]  px-2  border-primary"
              onChange={handleCategoryFilter}
            >
              <option className="text-xl" value="null">
                {" "}
                PAR CATEGORIE{" "}
              </option>
              {categ &&
                categ.map((c) => (
                  <option key={c.id} className="text-lg" value={c.cat_name}>
                    {" "}
                    {c.cat_name}{" "}
                  </option>
                ))}
            </select>
            <select
              className="h-9 text-primary rounded-md border-[1px]  px-2  border-primary"
              onChange={handleStatusFilter}
            >
              <option value={null}> PAR STATUT</option>
              <option value={0}> NON VALIDE </option>
              <option value={1}> VALIDE</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredArtworks.map((artwork) => (
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
