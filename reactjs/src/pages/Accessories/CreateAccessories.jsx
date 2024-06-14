// src/pages/Accessories/CreateAccessories.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';

const CreateAccessories = ({ url }) => {
  const [phoneId, setPhoneId] = useState('');
  const [screenProtector, setScreenProtector] = useState(false);
  const [caseProtector, setCaseProtector] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/accessories`, {
        phoneId,
        screenProtector,
        caseProtector
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Accessories created successfully!');
    } catch (error) {
      console.error('Error creating accessories:', error);
      alert('Failed to create accessories.');
    }
  };

  return (
    <div className="user-create-container">
      <h3>Create Accessories</h3>
      <form onSubmit={handleSubmit} className="create-bar">
        <input
          type="text"
          placeholder="Phone ID"
          value={phoneId}
          onChange={(e) => setPhoneId(e.target.value)}
          required
        />
        <label>
          Screen Protector
          <input
            type="checkbox"
            checked={screenProtector}
            onChange={(e) => setScreenProtector(e.target.checked)}
          />
        </label>
        <label>
          Case Protector
          <input
            type="checkbox"
            checked={caseProtector}
            onChange={(e) => setCaseProtector(e.target.checked)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateAccessories;
