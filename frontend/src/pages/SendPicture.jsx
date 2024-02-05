import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";
import AdressApi from "../components/ApiAdressForm/GetAdressApi";

export default function SendPicturePage() {
  const [sendPicture, setSendPicture] = useState();
  const [coords, setCoords] = useState();
  const { auth } = useOutletContext();
  const decoded = auth && jwtDecode(auth.token);
  const navigate = useNavigate();

  const categoriesOfSelect = [
    { value: "1", label: "retro" },
    { value: "2", label: "caligraphy" },
    { value: "3", label: "abstract" },
    { value: "4", label: "realistic" },
  ];
  /**
   * @param {string | number } e target event when form is submitted
   *
   * @const formData Object for contat all bundle form data
   * @property {File} file - The file to be sent, typically an image.
   * @property {string} title - The title associated obtained by the title field
   * @property {number} longitude - The longitudinal coordinate obtained by the address field
   * @property {number} latitude - The latitudinal coordinate obtained by the address field
   * @property {string} category_id - The identifier of the category , extracted from the form selection field.
   * @property {string} artist_id - The identifier of the artist , extracted from the form selection field.
   * @property {string} user_id - The identifier of the user , extracted from the form selection field.
   */
  const HandleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", sendPicture);
    formData.append("title", e.target[0].value);
    formData.append("longitude", coords[1]);
    formData.append("latitude", coords[0]);
    formData.append("category_id", e.target[1].value);
    formData.append("artist_id", e.target[1].value);
    formData.append("user_id", decoded.sub);
    try {
      const uploaderFile = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/artwork`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.info(uploaderFile);
      toast.success("La création du artwork a été réalisée avec succés !");
      navigate("/game/map");
    } catch (err) {
      console.error(err);
      toast.error(
        "Échec de l'enregistrement : un champ est manquant et/ou contient une erreur."
      );
    }
  };

  // recover an artwork from input file
  const HandleLoadFile = (e) => {
    setSendPicture(e.target.files[0]);
  };

  return (
    <div className="mt-20 flex-col md:flex-row justify-center  flex">
      <div className=" md:mt-10 md:w-[400px] md:max-h-[400px] max-h-[250px] md:m-0 m-auto w-[250px] md:h-[400px] h-[400px] rounded-lg relative border border-sky-800">
        {Boolean(sendPicture) && (
          <img
            className="shadow-xl shadow-slate-800 rounded-lg  w-full h-full object-cover"
            alt="upload"
            src={URL.createObjectURL(sendPicture)}
          />
        )}
      </div>
      {!auth ? (
        <h1 className="text-center"> VOUS N'ETES PAS IDENTIFIE</h1>
      ) : (
        <form
          onSubmit={HandleUpload}
          className="flex flex-col items-center h-screen"
        >
          <h3 className=" text-center">
            {sendPicture
              ? "Street art sélectionné  !!"
              : "Upload ton street art"}
          </h3>
          <input
            className="mx-10 pl-2 rounded-xl py-3 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
            type="text"
            name="title_street_art"
            placeholder="TITRE DU STREET ART..."
            required
          />
          <select
            title="SELECTIONNER UNE CATEGORIE"
            name="category_id"
            className="mx-10 w-[13rem] md:w-80 pl-3 rounded-xl py-3 lg:py-2 mt-5 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
          >
            {categoriesOfSelect.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
          <AdressApi setCoords={setCoords} />
          <div className="flex items-center justify-center w-full">
            <label
              className="flex flex-col items-center justify-center w-40 h-28 md:w-80 md:h-120 border-2 border-gray-300 shadow-lg shadow-slate-800 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-10"
              htmlFor="dropzone-file"
            >
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <div
                className="flex flex-col 
               justify-center items-center pt-5 pb-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path d="M43 9H45V41H43zM31 16H33V27H31zM17 16H19V27H17zM9 43H41V45H9zM9 5H41V7H9zM5 9H7V41H5zM41 9h2V7h-2V9zM7 9h2V7H7V9zM41 35L41 37 9 37 9 35 7 35 7 41 7 42 7 43 8 43 9 43 41 43 42 43 43 43 43 42 43 41 43 35z" />

                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-center font-semibold text-slate-950">
                  TELECHARGER VOTRE STREET ART
                </p>
                <p className="text-xs text-sky-800">SVG, PNG, JPG</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/png, image/jpeg"
                onChange={HandleLoadFile}
              />
            </label>
          </div>
          <button
            type="submit"
            className="cursor-pointer group relative flex gap-1.5 px-4 py-3  bg-sky-800  text-[#f1f1f1] rounded-xl hover:bg-opacity-80 transition font-semibold shadow-md mt-5"
          >
            Upload votre Street Art
          </button>
        </form>
      )}
    </div>
  );
}
