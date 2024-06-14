import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../index.css';

const UpdateUser = ({ url }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    company_id: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (formData.id) {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${url}/user/${formData.id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          const userData = response.data;
          setFormData({
            ...formData,
            name: userData.name,
            email: userData.email,
            company_id: userData.company_id,
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
          setMessage('Error fetching user data.');
        }
      }
    };

    fetchUserData();
  }, [formData.id, url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${url}/user/${formData.id}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setMessage('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      setMessage('Error updating user.');
    }
  };

  return (
    <div className="user-create-container">
      <h3>Update User</h3>
      <form onSubmit={handleSubmit} className="create-bar">
        <input
          type="text"
          name="id"
          placeholder="User ID"
          value={formData.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company_id"
          placeholder="Company ID"
          value={formData.company_id}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default UpdateUser;
