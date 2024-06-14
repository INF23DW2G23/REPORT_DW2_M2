import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';

const UserById = ({ url }) => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${url}/user/${userId}`);
      setUserData(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching user:', error);
      setError('Error fetching user');
      setUserData(null);
    }
  };

  return (
    <div className="user-search-container">
      <h3>Find User by ID</h3>
      <div className="search-bar">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {userData ? (
        <div className="user-data">
          <h4>User Details:</h4>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Company ID:</strong> {userData.company_id}</p>
          {userData.phones && userData.phones.length > 0 && (
            <>
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
            </>
          )}
        </div>
      ) : (
        <p className="user-data">No user data</p>
      )}
    </div>
  );
};

export default UserById;
