// src/pages/Accessories/DeleteAccessories.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';

const DeleteAccessories = ({ url }) => {
  const [phoneId, setPhoneId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${url}/accessories/${phoneId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Accessories deleted successfully!');
    } catch (error) {
      console.error('Error deleting accessories:', error);
      alert('Failed to delete accessories.');
    }
  };

  return (
    <div className="user-delete-container">
      <h3>Delete Accessories</h3>
      <form onSubmit={handleSubmit} className="delete-bar">
        <input
          type="text"
          placeholder="Phone ID"
          value={phoneId}
          onChange={(e) => setPhoneId(e.target.value)}
          required
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteAccessories;
