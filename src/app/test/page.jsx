"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import Modal2 from "./Modal2";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          onClick={openModal}
        >
          Open Modal
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default App;
