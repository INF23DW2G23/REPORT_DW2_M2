// src/components/componentsMap.js

import {
   Users, UserById, CreateUser, UpdateUser, DeleteUser, UserMe,
   Phones, PhoneById, CreatePhone, UpdatePhone, DeletePhone, PhoneByEmei,
   Companies, CompanyById, CreateCompany, UpdateCompany, DeleteCompany,
   Accessories, AccessoryByPhoneId, CreateAccessory, UpdateAccessory, DeleteAccessory
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
   'CreateAccessory': CreateAccessory,
   'UpdateAccessory': UpdateAccessory,
   'DeleteAccessory': DeleteAccessory
 };
 
 export default componentsMap;
 