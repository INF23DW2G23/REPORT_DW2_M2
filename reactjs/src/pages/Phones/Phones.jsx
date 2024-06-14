// src/pages/Phones/Phones.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../index.css';

const Phones = ({ url }) => {
  const [phoneData, setPhoneData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de telefones por página

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${url}/phones`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPhoneData(response.data);
      } catch (error) {
        console.error('Error fetching phones:', error);
        setError('Error fetching phones');
      }
    };

    fetchPhones();
  }, [url]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Calcular os itens para a página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = phoneData.slice(indexOfFirstItem, indexOfLastItem);

  // Calcular o número total de páginas
  const totalPages = Math.ceil(phoneData.length / itemsPerPage);

  return (
    <div className="phone-list">
      <h3>Phones</h3>
      {error && <p className="error">{error}</p>}
      {currentItems.length ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Model</th>
                <th>EMEI</th>
                <th>User ID</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((phone) => (
                <tr key={phone.phone_id}>
                  <td>{phone.phone_id}</td>
                  <td>{phone.brand}</td>
                  <td>{phone.model}</td>
                  <td>{phone.emei}</td>
                  <td>{phone.user_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default Phones;
