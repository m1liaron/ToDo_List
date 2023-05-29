import React, { useState } from 'react';
import './App.css';
import Tasks from '../tasks/Tasks';
import AppHeader from '../app-header/App-header';
import Modal from '../modal/Modal';

function App() {
  const [items, setItems] = useState([]);

  const onRemoveItem = (itemToRemove) => {
    const newItems = items.filter((item) => item !== itemToRemove);
    setItems(newItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO LIST</h1>
        <AppHeader items={items} setItems={setItems}/>
      </header>
      <main>
        <div className="container">
          <ul className='loli'>
              {items.map((item, index) => (
                <Tasks onRemoveItem={onRemoveItem} key={item + index} item={item} />
              ))}
            </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
