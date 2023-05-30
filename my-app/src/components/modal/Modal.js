import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ closeModal, items, setItems, startTime, setStartTime }) => {
  const [showModal, setShowModal] = useState(true);
  const [showError, setShowError] = useState(false);

  const error = document.querySelector('.error');

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setShowModal(false);
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeModal]);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.item;
    let newItems = [...items];
  
    if (input.value.length > 50) {
      const slicedText = input.value.slice(0, 65) + '...';
      newItems = [...newItems, slicedText];
    } else {
      newItems = [...newItems, input.value];
    }
  
    if (input.value === '') {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }

    setItems(newItems);
    form.reset();
  };

  const handleClose = () => {
    setShowModal(false);
    closeModal();
  };

  const handleButtonClick = () => {
    if (!startTime) {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setStartTime(formattedTime);
    }
  };
  const handleModalClick = (event) => {
    // Close the modal if the click is outside the modal content
    if (event.target.classList.contains('modal')) {
      setShowModal(false);
      closeModal();
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal" onClick={handleModalClick}>
            <div className={`error ${showError ? 'show' : 'hide'}`}>
              <h1>Write text</h1>
            </div>
          <div className="modal__dialog">

            <div className="modal__content">
              <form onSubmit={onSubmit}>
                <div className="modal__close" onClick={handleClose}>
                  x
                </div>
                <h1>Add task</h1>
                <div className="inputs">
                  <label>
                    Title
                    <input type="text" className="title input" name="item" />
                  </label>
                  <label>
                    Status
                    <select className="task-filter task-filter-form default">
                      <option value="incomplete">Incomplete</option>
                      <option value="complete">Complete</option>
                    </select>
                  </label>
                </div>
                <button className="btn" onClick={handleButtonClick}>
                  Add task
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
