// src/pages/Accessories/ListAccessories.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../index.css';

const ListAccessories = ({ url }) => {
  const [accessories, setAccessories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${url}/accessories`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAccessories(response.data);
      } catch (error) {
        console.error('Error fetching accessories:', error);
      }
    };

    fetchAccessories();
  }, [url]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const paginatedAccessories = accessories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="user-list">
      <h3>Accessories</h3>
      <table>
        <thead>
          <tr>
            <th>Phone ID</th>
            <th>Screen Protector</th>
            <th>Case Protector</th>
          </tr>
        </thead>
        <tbody>
          {paginatedAccessories.map((accessory) => (
            <tr key={accessory.phone_id}>
              <td>{accessory.phone_id}</td>
              <td>{accessory.screen_protector ? 'Yes' : 'No'}</td>
              <td>{accessory.case_protector ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage * itemsPerPage >= accessories.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListAccessories;
