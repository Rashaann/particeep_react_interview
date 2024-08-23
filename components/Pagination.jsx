import React from 'react';
import styles from "../styles/Home.module.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ currentPage, totalPages, onPageChange, itemsPerPage, onItemsPerPageChange }) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={ currentPage === 1 }
        style={{ background: 'white', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', border: 'none', height: 40, width: 40 }}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{fontSize: 20}}/>
      </button>
      <span>Page {currentPage} sur {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={ currentPage === totalPages }
        style={{ background: 'white', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', border: 'none', height: 40, width: 40 }}
      >
        <FontAwesomeIcon icon={faArrowRight} style={{fontSize: 20}} />
      </button>
      <select value={itemsPerPage} onChange={(e) => onItemsPerPageChange(parseInt(e.target.value))}>
        <option value={4}>4 par page</option>
        <option value={8}>8 par page</option>
        <option value={12}>12 par page</option>
      </select>
    </div>
  );
};

export default Pagination;