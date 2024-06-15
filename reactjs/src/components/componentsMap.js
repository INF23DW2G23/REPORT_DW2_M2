// src/components/componentsMap.js

import {
   Users, UserById, CreateUser, UpdateUser, DeleteUser, UserMe,
   Phones, PhoneById, CreatePhone, UpdatePhone, DeletePhone, PhoneByEmei,
   Companies, CompanyById, CreateCompany, UpdateCompany, DeleteCompany,
   Accessories, AccessoryByPhoneId, UpdateAccessory, 
 } from './componentsIndex';
 
 const componentsMap = {
   'Users': Users,
   'UserById': UserById,
   'CreateUser': CreateUser,
   'UpdateUser': UpdateUser,
   'DeleteUser': DeleteUser,
   'UserMe': UserMe,
   'Phones': Phones,
   'PhoneById': PhoneById,
   'CreatePhone': CreatePhone,
   'UpdatePhone': UpdatePhone,
   'DeletePhone': DeletePhone,
   'PhoneByEmei': PhoneByEmei,
   'Companies': Companies,
   'CompanyById': CompanyById,
   'CreateCompany': CreateCompany,
   'UpdateCompany': UpdateCompany,
   'DeleteCompany': DeleteCompany,
   'Accessories': Accessories,
   'AccessoryByPhoneId': AccessoryByPhoneId,
   'UpdateAccessory': UpdateAccessory,
 };
 
 export default componentsMap;
 