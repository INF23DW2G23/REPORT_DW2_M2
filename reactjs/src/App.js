import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication/Authentication';
import ProtectedRoute from './components/ProtectedRoute';
import UpdateUser from './pages/Users/UpdateUser';
import DeleteUser from './pages/Users/DeleteUser';
import Users from './pages/Users/Users';
import UserById from './pages/Users/UserById';
import CreateUser from './pages/Users/CreateUser';
import UserMe from './pages/Users/UserMe';
import Phones from './pages/Phones/Phones';
import PhoneById from './pages/Phones/PhoneById';
import CreatePhone from './pages/Phones/CreatePhone';
import UpdatePhone from './pages/Phones/UpdatePhone';
import DeletePhone from './pages/Phones/DeletePhone';
import PhoneByEmei from './pages/Phones/PhoneByEmei';
import Companies from './pages/Companies/ListCompanies';
import CompanyById from './pages/Companies/CompanyById';
import CreateCompany from './pages/Companies/CreateCompany';
import UpdateCompany from './pages/Companies/UpdateCompany';
import DeleteCompany from './pages/Companies/DeleteCompany';
import Accessories from './pages/Accessories/ListAccessories';
import AccessoryByPhoneId from './pages/Accessories/AccessoriesByPhoneId';
import UpdateAccessory from './pages/Accessories/UpdateAccessories';
import DeleteAccessory from './pages/Accessories/DeleteAccessories';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const machineHost = 'http://localhost:3000'; 
  const sufix = '/api/';

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  return (
    <div>
      <Routes>
        {/* públicas */}
        <Route path="/" element={<Authentication url={machineHost} api={sufix} onLogin={handleLogin} />} />
        <Route path="/users" element={<Users url={machineHost} />} />
        <Route path="/userbyid" element={<UserById url={machineHost} />} />
        <Route path="/createuser" element={<CreateUser url={machineHost} />} />

        {/* protegidas */}
        <Route path="/updateuser" element={<ProtectedRoute element={<UpdateUser url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/deleteuser" element={<ProtectedRoute element={<DeleteUser url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/userme" element={<ProtectedRoute element={<UserMe url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/phones" element={<ProtectedRoute element={<Phones url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/phonebyid" element={<ProtectedRoute element={<PhoneById url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/createphone" element={<ProtectedRoute element={<CreatePhone url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/updatephone" element={<ProtectedRoute element={<UpdatePhone url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/deletephone" element={<ProtectedRoute element={<DeletePhone url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/phonebyemei" element={<ProtectedRoute element={<PhoneByEmei url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/companies" element={<ProtectedRoute element={<Companies url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/companybyid" element={<ProtectedRoute element={<CompanyById url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/createcompany" element={<ProtectedRoute element={<CreateCompany url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/updatecompany" element={<ProtectedRoute element={<UpdateCompany url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/deletecompany" element={<ProtectedRoute element={<DeleteCompany url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/accessories" element={<ProtectedRoute element={<Accessories url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/accessorybyphoneid" element={<ProtectedRoute element={<AccessoryByPhoneId url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/updateaccessory" element={<ProtectedRoute element={<UpdateAccessory url={machineHost} api={sufix} />} token={token} />}/>
        <Route path="/deleteaccessory" element={<ProtectedRoute element={<DeleteAccessory url={machineHost} api={sufix} />} token={token} />}/>
      </Routes>
    </div>
  );
}

export default App;
