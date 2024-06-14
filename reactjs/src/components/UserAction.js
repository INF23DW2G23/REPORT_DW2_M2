import React from 'react';
import './Action.css'; 
const UserAction = ({ setCurrentComponent }) => {
  return (
    <div className="authenticated-buttons">
      <h4>User Actions</h4>
      <button onClick={() => setCurrentComponent('Users')} className="fetch-users-button">List Users</button>
      <button onClick={() => setCurrentComponent('UserById')} className="fetch-users-button">Find by ID</button>
      <button onClick={() => setCurrentComponent('CreateUser')} className="fetch-users-button">Register</button>
      <button onClick={() => setCurrentComponent('UpdateUser')} className="fetch-users-button">Update User</button>
      <button onClick={() => setCurrentComponent('DeleteUser')} className="fetch-users-button">Delete User</button>
      <button onClick={() => setCurrentComponent('UserMe')} className="fetch-users-button">Me</button>
    </div>
  );
};

export default UserAction;
