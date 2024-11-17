import React, { useState } from 'react';
import '../stylesheets/checklist/checklist.scss';

function Checklist({ onDaysChange }) {
  const [items, setItems] = useState([
    { id: 1, text: 'Lu', completed: false },
    { id: 2, text: 'Ma', completed: false },
    { id: 3, text: 'Mi', completed: false },
    { id: 4, text: 'Ju', completed: false },
    { id: 5, text: 'Vi', completed: false },
    { id: 6, text: 'Sa', completed: false },
    { id: 7, text: 'Do', completed: false },
  ]);

  const handleCheckboxChange = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
    onDaysChange(updatedItems);
  };

  return (
    <div>
      <h2>Días a Avisar</h2>
      <ul className="checklist">
        {items.map((item) => (
          <li key={item.id}>
            <label className="checklist-item">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <span>{item.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
