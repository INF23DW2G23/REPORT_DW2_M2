// src/pages/Companies/CompanyById.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';

const CompanyById = ({ url }) => {
  const [id, setId] = useState('');
  const [companyData, setCompanyData] = useState(null);
  const [error, setError] = useState(null);

  const fetchCompanyById = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${url}/company/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCompanyData(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching company by ID:', error);
      setError('Company not found');
      setCompanyData(null);
    }
  };

  return (
    <div className="user-search-container">
      <h3>Find Company by ID</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter company ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={fetchCompanyById}>Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {companyData && (
        <div className="user-data">
          <h4>Company Details</h4>
          <p>ID: {companyData.company_id}</p>
          <p>Name: {companyData.name}</p>
          <h4>Users:</h4>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {companyData.users.map((user) => (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CompanyById;
