// src/components/CompanyActions.jsx
import React from 'react';
import './Action.css'; 

const CompanyActions = ({ setCurrentComponent }) => {
  return (
    <div className="authenticated-buttons company-actions">
      <h4>Company Actions</h4>
      <button onClick={() => setCurrentComponent('Companies')} className="fetch-users-button">List Companies</button>
      <button onClick={() => setCurrentComponent('CompanyById')} className="fetch-users-button">Find by Company ID</button>
      <button onClick={() => setCurrentComponent('CreateCompany')} className="fetch-users-button">Create</button>
      <button onClick={() => setCurrentComponent('UpdateCompany')} className="fetch-users-button">Update Company</button>
      <button onClick={() => setCurrentComponent('DeleteCompany')} className="fetch-users-button">Delete Company</button>
    </div>
  );
};

export default CompanyActions;
