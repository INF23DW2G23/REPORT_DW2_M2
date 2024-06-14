import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';
const DeleteUser = ({ url }) => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${url}/user/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setMessage('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      setMessage('Error deleting user.');
    }
  };

  return (
    <div className="user-delete-container">
      <h3>Delete User</h3>
      <div className="delete-bar">
        <input
          type="text"
          placeholder="Enter user ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleDelete}>Delete</button>
      </div>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default DeleteUser;
