// RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = ({ addItemToList }) => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (itemName && itemDescription) {
      addItemToList({ name: itemName, description: itemDescription });
      setItemName('');
      setItemDescription('');
    } else {
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Campos do formulário de cadastro */}
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <textarea
        placeholder="Item Description"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
