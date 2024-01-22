import PropTypes from "prop-types";

export default function AddressList({ addresses, handleAddressSelection }) {
  if (!addresses) {
    const addressValidate = <p>saisir une adresse...</p>;
    return addressValidate;
  }
  return (
    <ul className="max-w-md text-gray-900 divide-y divide-gray-500 bg-white max-h-[200px] overflow-auto  rounded-md">
      {addresses.map((addressItem) => {
        const { properties, geometry } = addressItem;
        return (
          <li
            key={properties.id}
            className="flex py-3 hover:bg-[#c6e2ff] transition duration-5000"
          >
            <button
              type="button"
              className="text-lg font-semibold "
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
