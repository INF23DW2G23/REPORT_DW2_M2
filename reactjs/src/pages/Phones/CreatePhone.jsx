// src/pages/Phones/CreatePhone.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';

const CreatePhone = ({ url }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [emei, setEmei] = useState('');
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/phone`, { brand, model, emei, user_id: userId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Phone created successfully');
    } catch (error) {
      console.error('Error creating phone:', error);
      setMessage('Error creating phone');
    }
  };

  return (
    <div className="user-create-container">
      <h3>Create Phone</h3>
      <form className="create-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="EMEI"
          value={emei}
          onChange={(e) => setEmei(e.target.value)}
        />
        <input
          type="text"
          placeholder="User ID (optional)"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
      {message && <p className="error-message">{message}</p>}
    </div>
  );
};

export default CreatePhone;
