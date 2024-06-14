// src/pages/Phones/DeletePhone.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';

const DeletePhone = ({ url }) => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${url}/phone/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Phone deleted successfully');
    } catch (error) {
      console.error('Error deleting phone:', error);
      setMessage('Error deleting phone');
    }
  };

  return (
    <div className="user-delete-container">
      <h3>Delete Phone</h3>
      <div className="delete-bar">
        <input
          type="text"
          placeholder="Enter phone ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleDelete}>Delete</button>
      </div>
      {message && <p className="error-message">{message}</p>}
    </div>
  );
};

export default DeletePhone;
