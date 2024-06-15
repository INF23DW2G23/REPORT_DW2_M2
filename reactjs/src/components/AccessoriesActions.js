// src/components/AccessoriesActions.jsx
import React from 'react';
import './Action.css'; 

const AccessoriesActions = ({ setCurrentComponent }) => {
  return (
    <div className="authenticated-buttons accessory-buttons">
      <h4>Accessories Actions</h4>
      <button onClick={() => setCurrentComponent('Accessories')} className="fetch-users-button">List Accessories</button>
      <button onClick={() => setCurrentComponent('AccessoryByPhoneId')} className="fetch-users-button">Find by Phone ID</button>
      <button onClick={() => setCurrentComponent('UpdateAccessory')} className="fetch-users-button">Update Accessories</button>
    </div>
  );
};

export default AccessoriesActions;
