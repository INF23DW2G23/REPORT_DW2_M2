// src/pages/Accessories/AccessoriesByPhoneId.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';
/* comment */
const AccessoriesByPhoneId = ({ url }) => {
  const [phoneId, setPhoneId] = useState('');
  const [accessoryData, setAccessoryData] = useState(null);
  const [error, setError] = useState(null);

  const fetchAccessoriesByPhoneId = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${url}/accessories/${phoneId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAccessoryData(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching accessories by phone ID:', error);
      setError('Accessories not found');
      setAccessoryData(null);
    }
  };

  return (
    <div className="user-search-container">
      <h3>Find Accessories by Phone ID</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter phone ID"
          value={phoneId}
          onChange={(e) => setPhoneId(e.target.value)}
        />
        <button onClick={fetchAccessoriesByPhoneId}>Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {accessoryData && (
        <div className="user-data">
          <h4>Accessory Details</h4>
          <table>
            <thead>
              <tr>
                <th>Phone ID</th>
                <th>Screen Protector</th>
                <th>Case Protector</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{accessoryData.phone_id}</td>
                <td>{accessoryData.screen_protector ? 'Yes' : 'No'}</td>
                <td>{accessoryData.case_protector ? 'Yes' : 'No'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AccessoriesByPhoneId;
