import React, { useState } from 'react';
import './App-header.css';
import Modal from '../modal/Modal';

const AddTask = ({ items, setItems }) => {
  const [showModal, setShowModal] = useState(false);

  const onTask = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex">
        <div className="button-container">
          <button className="add-task-button" onClick={onTask}>
            Add task
          </button>
          <select className="task-filter">
            <option value="All">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
          </select>
        </div>
      </div>
      {showModal && <Modal closeModal={closeModal} items={items} setItems={setItems} />}
    </>
  );
};

export default AddTask;
