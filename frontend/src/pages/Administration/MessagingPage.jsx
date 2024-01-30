import axios from "axios";
import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Modal from "react-modal";

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
    <div className="h-[80vh] overflow-auto flex flex-col gap-5 mt-10">
      {messages &&
        messages.map((m) => (
          <div key={m.id} className="flex flex-col text-start">
            <div className="font-extrabold">{m.username}</div>
            <div>{m.title}</div>
            <button
              type="button"
              onClick={() => openModal(m)}
              className="mt-2 bg-emerald-800 text-white p-2 rounded mx-auto "
            >
              Message
            </button>
          </div>
        ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Message Details"
      >
        <button
          type="button"
          onClick={closeModal}
          style={{ float: "right", cursor: "pointer" }}
        >
          &#10005; {/* this is the closing cross */}
        </button>
        {selectedMessage && (
          <>
            <h2>Message de {selectedMessage.username}</h2>
            <p>{selectedMessage.title}</p>
            <p>{selectedMessage.body}</p>
            <button
              type="button"
              onClick={() => handleDelete(selectedMessage.id)}
              className="mt-2 bg-emerald-800 text-white p-2 rounded mx-auto"
            >
              Supprimer
            </button>
          </>
        )}
      </Modal>

      <Modal
        isOpen={confirmModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmer la suppression"
      >
        <h2>Confirmer la suppression</h2>
        <p>Êtes-vous sûr de vouloir supprimer ce message ?</p>
        <button
          type="button"
          onClick={confirmDelete}
          className="bg-sky-700 text-white p-2 rounded"
        >
          Confirmer
        </button>
        <button
          type="button"
          onClick={closeModal}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Annuler
        </button>
      </Modal>
    </div>
  );
}
