import PropTypes from "prop-types";

export default function AddressList({ addresses, handleAddressSelection }) {
  if (!addresses) {
    const addressValidate = <p className="bg:white">saisir une adresse...</p>;
    return addressValidate;
  }
  return (
    <ul className="max-w-s max-h-[4.8rem] text-gray-900 divide-y divide-gray-500 bg-white overflow-auto   rounded-b-md">
      {addresses.map((addressItem) => {
        const { properties, geometry } = addressItem;
        return (
          <li
            key={properties.id}
            className="flex py-3 w-[12rem] md:w-[19rem] hover:bg-[#c6e2ff] transition duration-5000"
          >
            <button
              type="button"
              className="md:text-lg text-sm font-semibold "
              onClick={() => handleAddressSelection(geometry.coordinates)}
            >
              {properties.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
AddressList.propTypes = {
  addresses: PropTypes.string.isRequired,
  handleAddressSelection: PropTypes.number.isRequired,
};
