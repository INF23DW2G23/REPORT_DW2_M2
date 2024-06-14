// src/pages/Companies/CreateCompany.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';

const CreateCompany = ({ url }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/company`, { name }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      console.error('Error creating company:', error);
      setError('Failed to create company');
      setMessage('');
    }
  };

  return (
    <div className="user-create-container">
      <h3>Create Company</h3>
      <form className="create-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CreateCompany;
