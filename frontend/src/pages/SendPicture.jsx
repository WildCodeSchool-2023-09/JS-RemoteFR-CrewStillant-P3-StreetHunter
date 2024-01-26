import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import AdressApi from "../components/ApiAdressForm/GetAdressApi";

export default function SendPicturePage() {
  const [sendPicture, setSendPicture] = useState();
  const [coords, setCoords] = useState();
  const { auth } = useOutletContext();
  const decoded = auth && jwtDecode(auth.token);
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
    <div className="mt-20">
      {!auth ? (
        <h1 className="text-center"> VOUS N'ETES PAS IDENTIFIE</h1>
      ) : (
        <form
          onSubmit={HandleUpload}
          className="flex flex-col items-center h-screen"
        >
          {Boolean(sendPicture) && (
            <img
              className="shadow-xl shadow-slate-800 rounded-lg flex items-center h-80 w-80"
              alt="upload"
              src={URL.createObjectURL(sendPicture)}
            />
          )}
          <h3 className=" text-center">
            {sendPicture
              ? "Street art sélectionné  !!"
              : "Upload ton street art"}
          </h3>
          <input
            className="mx-10 pl-2 rounded-xl py-3 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
            type="text"
            name="title_street_art"
            placeholder="TITRE DU STREET ART"
            required
          />
          <select
            name="category_id"
            className="mx-10 pl-3 rounded-xl py-3 lg:py-2 mt-5 shadow-lg shadow-slate-800 lg:text-xl lg:font-semibold lg:px-10 "
          >
            {categoriesOfSelect.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
          <AdressApi setCoords={setCoords} />
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={HandleLoadFile}
            className="cursor-pointer  text-[#f1f1f1]hadow-md mt-8 bg-cyan-800 text-fuchsia-50"
          />
          <button
            type="submit"
            className="cursor-pointer group relative flex gap-1.5 px-4 py-3  bg-sky-800  text-[#f1f1f1] rounded-xl hover:bg-opacity-80 transition font-semibold shadow-md mt-5"
          >
            Upload votre Street Art
          </button>
          <ToastContainer />
        </form>
      )}
    </div>
  );
}
