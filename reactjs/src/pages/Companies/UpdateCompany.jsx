import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../index.css';

const UpdateCompany = ({ url }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCompanyData = async () => {
      if (id) {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${url}/company/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          const companyData = response.data;
          setName(companyData.name);
        } catch (error) {
          console.error('Error fetching company data:', error);
          setError('Error fetching company data.');
        }
      }
    };

    fetchCompanyData();
  }, [id, url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${url}/company/${id}`, { name }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      console.error('Error updating company:', error);
      setError('Failed to update company');
      setMessage('');
    }
  };

  return (
    <div className="user-update-container">
      <h3>Update Company</h3>
      <form className="update-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default UpdateCompany;
