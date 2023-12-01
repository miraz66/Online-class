import React from "react";

const Modal = ({ isOpen, onClose }) => {
  const handleOverlayClick = (e) => {
    // Close the modal if the click is on the overlay (outside the modal)
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center ${
        isOpen ? "visible" : "invisible"
      } overlay`}
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-8 max-w-md rounded shadow-md">
        <p>This is the modal content.</p>
        <p>This is the modal content.</p>
        <p>This is the modal content.</p>
        <p>This is the modal content.</p>
        <p>This is the modal content.</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
