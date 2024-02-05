import axios from "axios";
import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Modal from "react-modal";
import Button from "../../assets/button/msgButton.png";
import supprButton from "../../assets/button/supprButton.png";
import annulButton from "../../assets/button/annulButton.png";
import confirmButton from "../../assets/button/confirmbutton.png";

export default function MessagingPage() {
  const { id } = useParams();
  const [messages, setMessages] = useState(useLoaderData());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    if (!messages.length) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/messaging/${id}`)
        .then((res) => setMessages(res.data))
        .catch((error) => console.error("Pas de message récupéré", error));
    }
  }, [id, messages]);

  const openModal = (message) => {
    setSelectedMessage(message);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setConfirmModalOpen(false);
  };

  const handleDelete = () => {
    setConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedMessage) {
      axios
        .delete(
          `${import.meta.env.VITE_BACKEND_URL}/api/messaging/${
            selectedMessage.id
          }`
        )
        .then(() => {
          setMessages(messages.filter((m) => m.id !== selectedMessage.id));
          closeModal();
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression du message", error);
        });
    }
  };

  return (
    <div className="mx-auto w-4/5 overflow-y-scroll no-scrollbar flex flex-col gap-5 mt-20 mb-15 bg-white bg-opacity-40 p-7 rounded">
      {messages &&
        messages.map((m) => (
          <div
            key={m.id}
            className="md:flex text-start items-center gap-3 md:justify-between"
          >
            <div className="font-extrabold text-xl">{m.username}</div>
            <div className="underline text-xl">{m.title}</div>
            <div className="md:overflow-hidden md:text-ellipsis md:whitespace-nowrap text-lg">
              {m.body.length > 50 ? `${m.body.substring(0, 80)}...` : m.body}
            </div>
            <button
              type="button"
              onClick={() => openModal(m)}
              className="md:justify-self-end flex justify-center"
            >
              <img
                src={Button}
                alt="message button"
                className="lg:w-[150px] w-[160px]"
              />
            </button>
          </div>
        ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Message Details"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
        className="bg-white p-4 rounded-lg mx-auto w-11/12 sm:w-3/4 md:max-w-lg h-fit overflow-y-scroll no-scrollbar"
      >
        <button
          type="button"
          onClick={closeModal}
          style={{ float: "right", cursor: "pointer" }}
        >
          &#10005; {/* this is the closing cross */}
        </button>
        {selectedMessage && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold leading-tight">
              Message de{" "}
              <span className="text-blue-700">{selectedMessage.username}</span>
            </h2>
            <p className="text-lg font-medium underline">
              {selectedMessage.title}
            </p>
            <p className="text-base leading-relaxed pb-5">
              {selectedMessage.body}
            </p>
            <button
              type="button"
              onClick={() => handleDelete(selectedMessage.id)}
              className="md"
            >
              <img
                src={supprButton}
                alt="suppress button"
                className="lg:w-[150px] w-[160px]"
              />
            </button>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={confirmModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmer la suppression"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
        className="bg-white p-4 rounded-lg mx-auto w-11/12 sm:w-3/4 md:max-w-lg lg:max-w-xl"
      >
        <h2>Confirmer la suppression</h2>
        <p>Êtes-vous sûr de vouloir supprimer ce message ?</p>
        <div className="overflow-y-scroll no-scrollbar flex justify-center gap-x-4">
          <button type="button" onClick={confirmDelete}>
            <img
              src={confirmButton}
              alt="confirm button"
              className="lg:w-[150px] w-[100px] "
            />
          </button>
          <button type="button" onClick={closeModal}>
            <img
              src={annulButton}
              alt="abort button"
              className="lg:w-[150px] w-[100px]"
            />
          </button>
        </div>
      </Modal>
    </div>
  );
}
