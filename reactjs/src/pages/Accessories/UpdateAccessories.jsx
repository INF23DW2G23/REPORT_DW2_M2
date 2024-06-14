import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../index.css';

const UpdateAccessory = ({ url }) => {
  const [phoneId, setPhoneId] = useState('');
  const [screenProtector, setScreenProtector] = useState(false);
  const [caseProtector, setCaseProtector] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchAccessoryData = async () => {
      if (phoneId) {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${url}/accessories/${phoneId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          const accessoryData = response.data;
          setScreenProtector(accessoryData.screen_protector);
          setCaseProtector(accessoryData.case_protector);
        } catch (error) {
          console.error('Error fetching accessory data:', error);
        }
      }
    };

    fetchAccessoryData();
  }, [phoneId, url]);

  const handleUpdate = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(`${url}/accessories/${phoneId}`, {
        screen_protector: screenProtector ? 1 : 0,
        case_protector: caseProtector ? 1 : 0
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setMessage('Accessories updated successfully');
    } catch (error) {
      console.error('Error updating accessories:', error);
      setMessage('Error updating accessories');
    }
  };

  return (
    <div className="user-update-container">
      <h3>Update Accessories</h3>
      <div className="update-bar">
        <input
          type="text"
          value={phoneId}
          onChange={(e) => setPhoneId(e.target.value)}
          placeholder="Enter Phone ID"
        />
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={screenProtector}
              onChange={(e) => setScreenProtector(e.target.checked)}
            />
            Screen Protector
          </label>
          <label>
            <input
              type="checkbox"
              checked={caseProtector}
              onChange={(e) => setCaseProtector(e.target.checked)}
            />
            Case Protector
          </label>
        </div>
        <button onClick={handleUpdate}>Update</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default UpdateAccessory;
