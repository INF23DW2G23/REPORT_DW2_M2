import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../index.css';

const UserMe = ({ url }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${url}/me`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (err) {
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [url]);

  if (loading) {
    return <p>Loading user data...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="user-me-container">
      <h3>Me</h3>
      <div className="user-details">
        <p><span>Name:</span> {userData.name}</p>
        <p><span>Email:</span> {userData.email}</p>
        <p><span>Company ID:</span> {userData.company_id}</p>
      </div>
      {userData.phones && userData.phones.length > 0 ? (
        <div className="user-phones-table">
          <h4>Phones:</h4>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Model</th>
                <th>EMEI</th>
              </tr>
            </thead>
            <tbody>
              {userData.phones.map((phone) => (
                <tr key={phone.phone_id}>
                  <td>{phone.phone_id}</td>
                  <td>{phone.brand}</td>
                  <td>{phone.model}</td>
                  <td>{phone.emei}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No phones associated</p>
      )}
    </div>
  );
};

export default UserMe;
