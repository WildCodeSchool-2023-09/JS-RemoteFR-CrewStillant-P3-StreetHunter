import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import formatAddress from "../../services/formatAddress";
import AddressList from "./AdressList";

export default function AddressApi({ setCoords }) {
  const [addresses, setAddressesSuggestions] = useState();
  const [address, setAddress] = useState();
  const [validatedAddress, setValidatedAddress] = useState();

  const getAddressApiGov = "https://api-adresse.data.gouv.fr/search/?q=";
  const HandleFetchApi = async () => {
    try {
      if (address.length > 3) {
        axios
          .get(`${getAddressApiGov}${address}`)
          .then((res) => setAddressesSuggestions(res.data.features));
      }
    } catch (e) {
      console.error(e);
    }
  };
  const formatAndSetAddress = (e) => {
    const formattedAddress = formatAddress(e.target.value);
    setAddress(formattedAddress);
  };
  const handleAddressSelection = (coords) => {
    // add coords
    setCoords(coords);
    setValidatedAddress("enable");
    formatAddress("");
    setAddressesSuggestions([]);
  };
  useEffect(() => {
    HandleFetchApi();
  }, [address]);
  const blockAreaTextAddress =
    validatedAddress === "enable" ? "ADRESSE SÉLECTIONNÉ !!" : null;
  const resetAreaTextAddress = () => {
    formatAddress("");
    setAddressesSuggestions([]);
    setValidatedAddress("");
  };
  return (
    <div className="flex flex-col w-[300px]   items-center">
      <input
        className="mx-10 pl-2 rounded-xl py-3 lg:py-4 shadow-lg shadow-slate-800 lg:text-xl mt-5 lg:font-semibold lg:px-10 "
        type="text"
        onChange={formatAndSetAddress}
        name="address"
        required
        value={blockAreaTextAddress}
        placeholder="ADRESSE DU STREET ART..."
        readOnly={validatedAddress}
      />

      <AddressList
        addresses={addresses}
        handleAddressSelection={handleAddressSelection}
      />
      <input
        onClick={resetAreaTextAddress}
        type="reset"
        className=" mt-2  mb-2 cursor-pointer transition-all bg-sky-800 text-white px-6  rounded-lg
border-sky-600 w-[150px] h-[2.rem]
border-b-[4px] hover:bg-opacity-60  hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      />
    </div>
  );
}
AddressApi.propTypes = {
  setCoords: PropTypes.number.isRequired,
};
