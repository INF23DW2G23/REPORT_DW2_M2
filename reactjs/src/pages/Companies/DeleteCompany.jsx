// src/pages/Companies/DeleteCompany.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';

const DeleteCompany = ({ url }) => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${url}/company/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      console.error('Error deleting company:', error);
      setError('Failed to delete company');
      setMessage('');
    }
  };

  return (
    <div className="user-delete-container">
      <h3>Delete Company</h3>
      <form className="delete-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default DeleteCompany;
