// src/components/PhoneActions.js
import React from 'react';
import './Action.css'; 

const PhoneActions = ({ setCurrentComponent }) => {
  return (
    <div className="authenticated-buttons phone-buttons">
      <h4>Phone Actions</h4>
      <button onClick={() => setCurrentComponent('Phones')} className="fetch-users-button">List Phones</button>
      <button onClick={() => setCurrentComponent('PhoneById')} className="fetch-users-button">Find by ID</button>
      <button onClick={() => setCurrentComponent('CreatePhone')} className="fetch-users-button">Register</button>
      <button onClick={() => setCurrentComponent('UpdatePhone')} className="fetch-users-button">Update Phone</button>
      <button onClick={() => setCurrentComponent('DeletePhone')} className="fetch-users-button">Delete Phone</button>
      <button onClick={() => setCurrentComponent('PhoneByEmei')} className="fetch-users-button">Find by EMEI</button>
    </div>
  );
};

export default PhoneActions;
