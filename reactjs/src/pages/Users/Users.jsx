// src/pages/Users/Users.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../index.css';

const Users = ({ url }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${url}/users`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching users');
      }
    };

    fetchUsers();
  }, [url]);

  return (
    <div className="user-list">
      <h3>Users</h3>
      {error && <p className="error">{error}</p>}
      {userData ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company ID</th>
            
        
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default Users;
