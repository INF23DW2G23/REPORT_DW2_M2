// src/pages/Companies/ListCompanies.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../index.css';

const ListCompanies = ({ url }) => {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${url}/companies`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
        setError('Error fetching companies');
      }
    };

    fetchCompanies();
  }, [url]);

  return (
    <div className="user-list">
      <h3>Companies</h3>
      {error && <p className="error-message">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.company_id}>
              <td>{company.company_id}</td>
              <td>{company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCompanies;
