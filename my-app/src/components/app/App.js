import React, { useState } from 'react';
import './App.css';
import Tasks from '../tasks/Tasks';
import AppHeader from '../app-header/App-header';

function App() {
  const [items, setItems] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [filter, setFilter] = useState('All');

  const onRemoveItem = (itemToRemove) => {
    const newItems = items.filter((item) => item !== itemToRemove);
    setItems(newItems);
  };

  const filteredTasks = items.filter((item) => {
    switch (filter) {
      case 'All' :
        return true;
      case 'Incomplete' :
        return !item.complete;
      case 'Complete' :
        return item.complete;
      default : 
        return true
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO LIST</h1>
        <AppHeader
          items={items}
          setItems={setItems}
          startTime={startTime}
          setStartTime={setStartTime}
          filter={filter}
          setFilter={setFilter}
        />
      </header>
      <main>
        <div className="container">
          <ul className="loli">
            {items
              .map((item, index) => (
                <Tasks
                  onRemoveItem={onRemoveItem}
                  key={item + index}
                  item={item}
                  startTime={startTime}
                  setStartTime={setStartTime}
                  filter={filter}
                  setFilter={setFilter}
                  tasks={filteredTasks}
                />
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}


export default App;
