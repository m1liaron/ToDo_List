import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ closeModal, items, setItems }) => {
  const [showModal, setShowModal] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.item;
    let newItems = [...items];
    
    if (input.value.length > 100) {
      const slicedText = input.value.slice(0, 80) + "...";
      newItems = [...newItems, slicedText];
    } else {
      newItems = [...newItems, input.value];
    }
  
    if (input.value === '') {
      return;
    }
  
    setItems(newItems);
    form.reset();
  };
  
  

  const handleClose = () => {
    setShowModal(false);
    closeModal();
  };

  return (
    <>
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__content">
            <form onSubmit={onSubmit}>
              <div className="modal__close" onClick={handleClose}>
                X
              </div>
              <h1>Add task</h1>
              <div className="inputs">
                <label htmlFor="title">
                  Title
                  <input type="text" className="title input" name="item" />
                </label>
                <label htmlFor="status">
                  Status
                  <select className="task-filter task-filter-form default">
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Complete</option>
                  </select>
                </label>
              </div>
              <button className="btn">Add task</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
