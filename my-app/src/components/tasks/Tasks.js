import React, { useState } from 'react';
import './Tasks.css'

const Tasks = ({ item, onRemoveItem, startTime, filter, task}) => {
    const [complete, setComplete] = useState(false);
    const [editedItem, setEditedItem] = useState(item);
    const [inputActive, setInputActive] = useState(false);

    const activation = () => {
      setComplete(!complete);
    }

    const onDelete = () => {
      onRemoveItem(item)
    }

    const onChange = (e) => {
      setInputActive(!inputActive);
      if (inputActive) {
        setEditedItem(e.target.value);
      } else {  
        setEditedItem(item.value)
      }
    }

    if ((filter === 'Incomplete' && complete) || (filter === 'Complete' && !complete)) {
      return null; // Don't render the item if filter is set to "Incomplete" and it's not complete, or if filter is set to "Complete" and it's not incomplete
    }

    return (
        <li className='list'>
              <input type="checkbox"className='checkBox' onClick={activation} checked={complete}/>
              <div className="item">
                  <div className="name">
                    <input 
                    type="text" 
                    className={`title-input ${inputActive ? 'active-input' : 'title-input'}`}
                    value={editedItem} style={{'textDecoration': complete  ? 'line-through' : false}} 
                    readOnly={!inputActive}
                    />
                    <p className='time'>{startTime}</p>
                  </div>
                <div className="container-icon">
                  <i className="fa-solid fa-trash" onClick={onDelete}></i>
                  <i className={`fa-solid fa-pen ${inputActive ? 'pen-active' : 'fa-pen'}`} onClick={onChange}></i>
                </div>
              </div>
        </li>
      );
}

export default Tasks;