// src/pages/Phones/PhoneByEmei.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';

const PhoneByEmei = ({ url }) => {
  const [emei, setEmei] = useState('');
  const [phoneData, setPhoneData] = useState(null);
  const [error, setError] = useState(null);

  const fetchPhoneByEmei = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${url}/phone/emei/${emei}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPhoneData(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching phone by EMEI:', error);
      setError('Phone not found');
      setPhoneData(null);
    }
  };

  return (
    <div className="user-search-container">
      <h3>Find Phone by EMEI</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter phone EMEI"
          value={emei}
          onChange={(e) => setEmei(e.target.value)}
        />
        <button onClick={fetchPhoneByEmei}>Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {phoneData && (
        <div className="user-data">
          <h4>Phone Details</h4>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Model</th>
                <th>EMEI</th>
                <th>User ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{phoneData.phone_id}</td>
                <td>{phoneData.brand}</td>
                <td>{phoneData.model}</td>
                <td>{phoneData.emei}</td>
                <td>{phoneData.user_id}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PhoneByEmei;
