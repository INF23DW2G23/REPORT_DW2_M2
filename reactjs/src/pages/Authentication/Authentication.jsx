// src/pages/Authentication/Authentication.jsx
import React, { useState } from 'react';
import axios from 'axios';

import './Authentication.css';
import componentsMap from '../../components/componentsMap';
import {
  UserActions, PhoneActions, CompanyActions, AccessoriesActions
} from '../../components/componentsIndex';

const Authentication = ({ url, api }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}${api}login`, {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      alert('Login successful. Token: ' + response.data.token);
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const renderComponent = () => {
    const Component = componentsMap[currentComponent];
    if (Component) {
      return <Component url={url} api={api} token={token} />;
    }
    return null;
  };

  return (
    <div className="container">
      <div className="navbar">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <button onClick={() => setCurrentComponent('Users')} className="fetch-users-button">List Users</button>
        <button onClick={() => setCurrentComponent('UserById')} className="fetch-users-button">Find by ID</button>
        <button onClick={() => setCurrentComponent('CreateUser')} className="fetch-users-button">Register</button>
      </div>
      {token && (
        <>
          <div className="user-actions-container">
            <UserActions setCurrentComponent={setCurrentComponent} />
            <CompanyActions setCurrentComponent={setCurrentComponent} />
          </div>
          <div className="phone-actions-container">
            <PhoneActions setCurrentComponent={setCurrentComponent} />
            <AccessoriesActions setCurrentComponent={setCurrentComponent} />
          </div>
        </>
      )}
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Authentication;
