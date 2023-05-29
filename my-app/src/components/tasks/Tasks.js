import React, { useState } from 'react';
import './Tasks.css'

const Tasks = ({ item, onRemoveItem }) => {
    const [active, setActive] = useState(false);
    const [editedItem, setEditedItem] = useState(item);
    const [inputActive, setInputActive] = useState(false);

    const activation = () => {
      setActive(!active);
    }

    const onDelte = () => {
      onRemoveItem(item)
    }

    const onChange = (e) => {
      if (inputActive) {
        setEditedItem(e.target.value);
      }
    };

    const activePen = () => {
      setInputActive(!inputActive);
    }

    return (
        <li className='list'>
              <input type="checkbox"className='checkBox' onClick={activation}/>
              <div className="item">
                <input 
                  type="text" 
                  className={`title-input ${inputActive ? 'active-input' : 'title-input'}`}
                  value={editedItem} style={{'textDecoration': active  ? 'line-through' : null}}/>
                <div className="container-icon">
                  <i className="fa-solid fa-trash" onClick={onDelte}></i>
                  <i
                    className={`fa-solid fa-pen ${inputActive ? 'pen-active' : 'fa-solid'}`}
                    onClick={() => {
                      if (!inputActive) {
                        setInputActive(true);
                      } else {
                        setInputActive(false);
                        setEditedItem(item);
                      }
                    }}
                  ></i>
                </div>
              </div>
        </li>
      );
}

export default Tasks;