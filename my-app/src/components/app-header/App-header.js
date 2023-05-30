import React, { useState } from 'react';
import './App-header.css';
import Modal from '../modal/Modal';

const AppHeader = ({ items, setItems, startTime, setStartTime, filter, setFilter }) => {
  const [showModal, setShowModal] = useState(false);

  const onTask = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className="flex">
        <div className="button-container">
          <button className="add-task-button" onClick={onTask}>
            Add task
          </button>
          <select className="task-filter" value={filter} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
      </div>
      {showModal && (
        <Modal
          closeModal={closeModal}
          items={items}
          setItems={setItems}
          startTime={startTime}
          setStartTime={setStartTime}
        />
      )}
    </>
  );
};

export default AppHeader;
