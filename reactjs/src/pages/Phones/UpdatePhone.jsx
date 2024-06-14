import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../index.css';

const UpdatePhone = ({ url }) => {
  const [id, setId] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [emei, setEmei] = useState('');
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPhoneData = async () => {
      if (id) {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${url}/phone/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          const phoneData = response.data;
          setBrand(phoneData.brand);
          setModel(phoneData.model);
          setEmei(phoneData.emei);
          setUserId(phoneData.user_id);
        } catch (error) {
          console.error('Error fetching phone data:', error);
          setMessage('Error fetching phone data.');
        }
      }
    };

    fetchPhoneData();
  }, [id, url]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(`${url}/phone/${id}`, { brand, model, emei, user_id: userId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Phone updated successfully');
    } catch (error) {
      console.error('Error updating phone:', error);
      setMessage('Error updating phone');
    }
  };

  return (
    <div className="user-update-container">
      <h3>Update Phone</h3>
      <form className="update-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Phone ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
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
        <button type="submit">Update</button>
      </form>
      {message && <p className="error-message">{message}</p>}
    </div>
  );
};

export default UpdatePhone;
