import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';

const CreateUser = ({ url }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company_id: '',
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/user`, formData);
      setMessage('User created successfully');
      setMessageType('success');
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage('Error registering user.');
      setMessageType('error');
    }
  };

  return (
    <div className="user-create-container">
      <h3>Create User</h3>
      <form onSubmit={handleSubmit} className="create-bar">
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
        <button type="submit">Register</button>
      </form>
      {message && <p className={`message ${messageType}`}>{message}</p>}
    </div>
  );
};

export default CreateUser;
